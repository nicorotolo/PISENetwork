document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("search-input");
  var list = document.getElementById("article-list");

  if (!list) {
    return;
  }

  var items = Array.prototype.slice.call(list.querySelectorAll(".article-item"));
  var dividers = Array.prototype.slice.call(document.querySelectorAll(".article-divider"));
  var emptyMsg = document.getElementById("no-results");
  var meta = document.getElementById("pg-meta");

  var catFilter = document.getElementById("category-filter");
  var catButtons = catFilter
    ? Array.prototype.slice.call(catFilter.querySelectorAll("[data-cat]"))
    : [];
  var allBtn = catFilter ? catFilter.querySelector('[data-cat=""]') : null;
  var activeCats = [];

  var pager = document.getElementById("pager");
  var btnPrev = pager ? pager.querySelector('[data-act="prev"]') : null;
  var btnNext = pager ? pager.querySelector('[data-act="next"]') : null;
  var pgPages = document.getElementById("pg-pages");

  var PAGE_SIZE = 10;
  var curPage = 1;
  var filtered = items.slice();

  function normalize(value) {
    return (value || "").toLowerCase().trim();
  }

  function scrollListIntoView() {
    list.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateMeta(start, end, total) {
    if (!meta) {
      return;
    }

    if (total === 0) {
      meta.textContent = "";
      return;
    }

    meta.textContent = "Showing " + (start + 1) + "-" + end + " of " + total + " articles";
  }

  function updateHasActive() {
    if (!catFilter) {
      return;
    }

    catFilter.classList.toggle("has-active", activeCats.length > 0);
  }

  function syncDividers(visibleItems) {
    dividers.forEach(function (divider) {
      divider.style.display = "none";
    });

    visibleItems.slice(0, -1).forEach(function (item) {
      var next = item.nextElementSibling;
      if (next && next.classList.contains("article-divider")) {
        next.style.display = "";
      }
    });
  }

  function buildPager(pageCount) {
    if (!pager || !pgPages) {
      return;
    }

    pager.hidden = pageCount <= 1;

    if (btnPrev) {
      btnPrev.disabled = curPage === 1;
    }

    if (btnNext) {
      btnNext.disabled = curPage === pageCount || pageCount === 0;
    }

    pgPages.innerHTML = "";

    if (pageCount <= 1) {
      return;
    }

    for (var page = 1; page <= pageCount; page++) {
      var button = document.createElement("button");
      button.className = "pg-num" + (page === curPage ? " is-active" : "");
      button.textContent = page;

      (function (targetPage) {
        button.addEventListener("click", function () {
          curPage = targetPage;
          render();
          scrollListIntoView();
        });
      })(page);

      pgPages.appendChild(button);
    }
  }

  function render() {
    items.forEach(function (item) {
      item.style.display = "none";
    });

    var total = filtered.length;
    var pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));

    if (curPage > pageCount) {
      curPage = pageCount;
    }

    if (curPage < 1) {
      curPage = 1;
    }

    var start = (curPage - 1) * PAGE_SIZE;
    var end = Math.min(start + PAGE_SIZE, total);
    var visibleItems = filtered.slice(start, end);

    visibleItems.forEach(function (item) {
      item.style.display = "";
    });

    if (emptyMsg) {
      emptyMsg.classList.toggle("hidden", total > 0);
    }

    syncDividers(visibleItems);
    buildPager(pageCount);
    updateMeta(start, end, total);
  }

  function applyFilter() {
    var query = normalize(input ? input.value : "");
    var selectedCats = activeCats.slice();

    filtered = items.filter(function (item) {
      var title = normalize(item.getAttribute("data-title"));
      var categories = normalize(item.getAttribute("data-categories"));
      var categoryList = categories ? categories.split("|") : [];
      var matchTitle = !query || title.indexOf(query) !== -1;
      var matchCategory =
        selectedCats.length === 0 ||
        selectedCats.some(function (category) {
          return categoryList.indexOf(category) !== -1;
        });

      return matchTitle && matchCategory;
    });

    curPage = 1;
    render();
  }

  if (input) {
    input.addEventListener("input", applyFilter);
  }

  catButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var category = normalize(button.getAttribute("data-cat"));

      if (!category) {
        activeCats = [];
        catButtons.forEach(function (item) {
          item.classList.toggle("is-active", item === button);
        });
        updateHasActive();
        applyFilter();
        return;
      }

      var index = activeCats.indexOf(category);
      if (index === -1) {
        activeCats.push(category);
        button.classList.add("is-active");
      } else {
        activeCats.splice(index, 1);
        button.classList.remove("is-active");
      }

      if (allBtn) {
        allBtn.classList.toggle("is-active", activeCats.length === 0);
      }

      updateHasActive();
      applyFilter();
    });
  });

  if (btnPrev) {
    btnPrev.addEventListener("click", function () {
      if (curPage <= 1) {
        return;
      }

      curPage -= 1;
      render();
      scrollListIntoView();
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", function () {
      var pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
      if (curPage >= pageCount) {
        return;
      }

      curPage += 1;
      render();
      scrollListIntoView();
    });
  }

  if (allBtn) {
    allBtn.classList.add("is-active");
  }

  updateHasActive();
  applyFilter();
});
