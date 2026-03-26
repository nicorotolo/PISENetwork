(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyC6KaHNrfihzFlj6TWQuDoY4wreWU11oag",
    authDomain: "pise-network.firebaseapp.com",
    projectId: "pise-network",
    storageBucket: "pise-network.firebasestorage.app",
    messagingSenderId: "904141747918",
    appId: "1:904141747918:web:c4fa15d5223596ecb5829f",
    measurementId: "G-PXSXRQFZG7"
  };

  const collectionName = "articleFeedback";
  const likeStoragePrefix = "pise_like_";
  const localCountPrefix = "pise_like_count_";

  function getFirestore() {
    try {
      if (typeof firebase === "undefined") {
        console.warn("Firebase is not available on this page. Using local fallback.");
        return null;
      }

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      return firebase.firestore();
    } catch (error) {
      console.error("Unable to initialize Firestore:", error);
      return null;
    }
  }

  function getCountTargets(container) {
    return Array.from(container.querySelectorAll(".article-like-count-number")).map(function (countNode) {
      return {
        countNode: countNode,
        labelNode: countNode.parentElement
          ? countNode.parentElement.querySelector(".article-like-count-label")
          : null
      };
    });
  }

  function getLikeButtons(container) {
    return Array.from(container.querySelectorAll(".article-like-button"));
  }

  function updateLikedState(buttons, liked) {
    buttons.forEach(function (button) {
      const textNode = button.querySelector(".article-like-button-text");
      button.classList.toggle("is-liked", liked);
      button.setAttribute("aria-pressed", liked ? "true" : "false");
      button.disabled = liked;

      if (textNode) {
        textNode.textContent = liked ? "Liked" : "Like";
      }
    });
  }

  function updateCount(targets, likes) {
    const safeLikes = Math.max(0, likes || 0);

    targets.forEach(function (target) {
      target.countNode.textContent = safeLikes;

      if (target.labelNode) {
        target.labelNode.textContent = safeLikes === 1 ? "like" : "likes";
      }
    });
  }

  function readLocalCount(articleId) {
    return parseInt(localStorage.getItem(localCountPrefix + articleId), 10) || 0;
  }

  function writeLocalCount(articleId, likes) {
    localStorage.setItem(localCountPrefix + articleId, String(Math.max(0, likes || 0)));
  }

  function createFloatingDock(feedbackBlock) {
    const floating = document.createElement("div");
    floating.className = "article-like-floating";
    floating.setAttribute("aria-hidden", "true");
    floating.innerHTML =
      '<div class="article-like-floating__inner">' +
      '  <button class="article-like-button article-like-button--floating" type="button" aria-label="Like this article" aria-pressed="false">' +
      '    <span class="article-like-icon" aria-hidden="true">&#128077;</span>' +
      '    <span class="article-like-button-text sr-only">Like</span>' +
      "  </button>" +
      '  <span class="article-like-count article-like-count--floating" aria-live="polite">' +
      '    <span class="article-like-count-number">0</span>' +
      '    <span class="article-like-count-label">likes</span>' +
      "  </span>" +
      "</div>";

    document.body.appendChild(floating);

    return floating;
  }

  function attachFloatingBehavior(trigger, feedbackBlock, floatingDock) {
    function updateVisibility() {
      if (window.innerWidth < 1024) {
        floatingDock.classList.remove("is-visible");
        return;
      }

      const triggerRect = trigger.getBoundingClientRect();
      const feedbackRect = feedbackBlock.getBoundingClientRect();
      const hasStarted = triggerRect.top <= 120;
      const feedbackVisible = feedbackRect.top < window.innerHeight - 120 && feedbackRect.bottom > 120;

      floatingDock.classList.toggle("is-visible", hasStarted && !feedbackVisible);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const db = getFirestore();
    const feedbackBlocks = document.querySelectorAll(".article-feedback");
    if (!feedbackBlocks.length) return;

    feedbackBlocks.forEach(function (feedbackBlock) {
      const articleId = (feedbackBlock.dataset.articleId || "").trim();
      if (!articleId) return;

      const trigger = document.querySelector(".article-like-trigger");
      const floatingDock = createFloatingDock(feedbackBlock);
      const buttons = getLikeButtons(feedbackBlock).concat(getLikeButtons(floatingDock));
      const countTargets = getCountTargets(feedbackBlock).concat(getCountTargets(floatingDock));
      const storageKey = likeStoragePrefix + articleId;
      const alreadyLiked = localStorage.getItem(storageKey) === "1";

      updateLikedState(buttons, alreadyLiked);
      updateCount(countTargets, readLocalCount(articleId));

      if (trigger) {
        attachFloatingBehavior(trigger, feedbackBlock, floatingDock);
      }

      if (db) {
        const docRef = db.collection(collectionName).doc(articleId);

        docRef.onSnapshot(function (doc) {
          const likes = doc.exists && typeof doc.data().likes === "number"
            ? doc.data().likes
            : readLocalCount(articleId);

          writeLocalCount(articleId, likes);
          updateCount(countTargets, likes);
        }, function (error) {
          console.error("Unable to read article likes:", error);
        });

        buttons.forEach(function (button) {
          button.addEventListener("click", function () {
            if (button.disabled || localStorage.getItem(storageKey) === "1") {
              return;
            }

            const currentCount = parseInt(countTargets[0].countNode.textContent, 10) || 0;
            updateLikedState(buttons, true);
            updateCount(countTargets, currentCount + 1);

            docRef.set({
              articleId: articleId,
              likes: firebase.firestore.FieldValue.increment(1),
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true }).then(function () {
              localStorage.setItem(storageKey, "1");
            }).catch(function (error) {
              console.error("Unable to save article like:", error);
              updateLikedState(buttons, false);
              updateCount(countTargets, currentCount);
            });
          });
        });

        return;
      }

      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          if (button.disabled || localStorage.getItem(storageKey) === "1") {
            return;
          }

          const nextCount = readLocalCount(articleId) + 1;
          localStorage.setItem(storageKey, "1");
          writeLocalCount(articleId, nextCount);
          updateLikedState(buttons, true);
          updateCount(countTargets, nextCount);
        });
      });
    });
  });
})();
