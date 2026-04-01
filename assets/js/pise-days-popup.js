(function () {
  var modal = document.getElementById("pise-days-modal");
  var searchParams = new URLSearchParams(window.location.search);
  var forceOpen = searchParams.get("show-pise-days-popup") === "1";

  if (!modal) {
    return;
  }

  var endDate = modal.dataset.endDate ? new Date(modal.dataset.endDate) : null;
  if (endDate && !isNaN(endDate.getTime()) && Date.now() > endDate.getTime()) {
    return;
  }

  var pagePath = window.location.pathname.replace(/\/+$/, "") || "/";
  var skipPaths = ["/pise-days-2026"];
  if (!forceOpen && skipPaths.indexOf(pagePath) !== -1) {
    return;
  }

  var storageKey = "pise-days-popup-dismissed-v1";
  if (!forceOpen && window.localStorage && localStorage.getItem(storageKey) === "true") {
    return;
  }

  var openModal = function () {
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("pise-days-modal-open");
  };

  var closeModal = function () {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("pise-days-modal-open");

    if (window.localStorage) {
      localStorage.setItem(storageKey, "true");
    }
  };

  window.__piseDaysPopup = {
    open: openModal,
    close: closeModal,
    reset: function () {
      if (window.localStorage) {
        localStorage.removeItem(storageKey);
      }
    }
  };

  modal.querySelectorAll("[data-pise-days-close]").forEach(function (trigger) {
    trigger.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  window.setTimeout(openModal, forceOpen ? 100 : 700);
})();
