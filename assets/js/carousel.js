function initCarousel(carousel) {
  if (!carousel || carousel.dataset.carouselReady === "true") {
    return;
  }

  const viewport = carousel.querySelector("[data-carousel-viewport]");
  const track = carousel.querySelector("[data-carousel-track]");
  const allSlides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const slides = allSlides.filter((slide) => !slide.dataset.carouselClone);
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const dotsRoot = carousel.querySelector("[data-carousel-dots]");
  const caption = carousel.querySelector("[data-carousel-caption]");

  if (!viewport || !track || slides.length === 0) {
    return;
  }

  let index = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (index < 0) {
    index = 0;
  }

  let displayIndex = slides.length > 1 ? index + 1 : index;
  let dragStartX = 0;
  let dragDeltaX = 0;
  let dragStartTime = 0;
  let isDragging = false;
  let isAnimating = false;
  let pointerId = null;
  let autoplayTimer = null;
  let isHovered = false;

  const dots = dotsRoot
    ? slides.map((_, slideIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "carousel__dot";
        button.setAttribute("aria-label", `Go to image ${slideIndex + 1}`);
        button.addEventListener("click", () => goTo(slideIndex));
        dotsRoot.appendChild(button);
        return button;
      })
    : [];

  function currentDisplaySlide() {
    return allSlides[Math.max(0, Math.min(displayIndex, allSlides.length - 1))] || null;
  }

  function normalize(nextIndex) {
    return (nextIndex + slides.length) % slides.length;
  }

  function applyState() {
    allSlides.forEach((slide) => {
      slide.classList.remove("is-active", "is-prev", "is-next");
    });

    const prevIndex = normalize(index - 1);
    const nextIndex = normalize(index + 1);

    slides[index].classList.add("is-active");
    slides[prevIndex].classList.add("is-prev");
    slides[nextIndex].classList.add("is-next");

    if (slides.length > 1) {
      if (index === 0) {
        allSlides[0].classList.add("is-prev");
      }

      if (index === slides.length - 1) {
        allSlides[allSlides.length - 1].classList.add("is-next");
      }
    }

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === index;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });

    if (caption) {
      const text = slides[index].dataset.caption || "";
      caption.textContent = text;
      caption.hidden = text === "";
    }
  }

  function render(offset = 0) {
    const activeSlide = currentDisplaySlide();
    if (!activeSlide) {
      return;
    }

    const slideCenter = activeSlide.offsetLeft + activeSlide.offsetWidth / 2;
    const viewportCenter = viewport.clientWidth / 2;
    const x = viewportCenter - slideCenter + offset;
    track.style.transform = `translate3d(${x}px, 0, 0)`;
  }

  function setTransition(enabled) {
    track.style.transition = enabled ? "transform 520ms cubic-bezier(0.22, 1, 0.36, 1)" : "none";
  }

  function syncFromDisplayIndex() {
    if (slides.length <= 1) {
      return;
    }

    if (displayIndex === 0) {
      displayIndex = slides.length;
      setTransition(false);
      render();
    } else if (displayIndex === allSlides.length - 1) {
      displayIndex = 1;
      setTransition(false);
      render();
    }
  }

  function finalizeTransition() {
    if (slides.length <= 1) {
      return;
    }

    syncFromDisplayIndex();
    isAnimating = false;
  }

  function goTo(nextIndex, { immediate = false } = {}) {
    index = normalize(nextIndex);
    displayIndex = slides.length > 1 ? index + 1 : index;
    applyState();
    setTransition(!immediate);
    render();

    if (!immediate) {
      isAnimating = true;
    }
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function startAutoplay() {
    stopAutoplay();

    if (slides.length <= 1) {
      return;
    }

    autoplayTimer = window.setInterval(() => {
      if (isDragging || isAnimating || isHovered) {
        return;
      }

      shiftDisplay(1);
    }, 4200);
  }

  function shiftDisplay(delta) {
    if (slides.length <= 1) {
      return;
    }

    index = normalize(index + delta);
    displayIndex += delta;
    applyState();
    setTransition(true);
    render();
    isAnimating = true;
  }

  function onPointerDown(event) {
    if (isAnimating || (event.pointerType === "mouse" && event.button !== 0)) {
      return;
    }

    isDragging = true;
    pointerId = event.pointerId;
    dragStartX = event.clientX;
    dragDeltaX = 0;
    dragStartTime = performance.now();

    viewport.classList.add("is-dragging");
    viewport.setPointerCapture(pointerId);
    setTransition(false);
    stopAutoplay();
  }

  function onPointerMove(event) {
    if (!isDragging || event.pointerId !== pointerId) {
      return;
    }

    dragDeltaX = event.clientX - dragStartX;
    render(dragDeltaX);
  }

  function finishDrag(event) {
    if (!isDragging || event.pointerId !== pointerId) {
      return;
    }

    const elapsed = Math.max(performance.now() - dragStartTime, 1);
    const velocity = dragDeltaX / elapsed;
    const activeSlide = currentDisplaySlide();
    const width = activeSlide ? activeSlide.offsetWidth : viewport.clientWidth;
    const threshold = Math.min(width * 0.16, 120);
    const shouldMove =
      Math.abs(dragDeltaX) > threshold || Math.abs(velocity) > 0.45;

    isDragging = false;
    viewport.classList.remove("is-dragging");
    viewport.releasePointerCapture(pointerId);
    pointerId = null;

    if (shouldMove && slides.length > 1) {
      shiftDisplay(dragDeltaX < 0 ? 1 : -1);
    } else {
      setTransition(true);
      render();
    }

    if (!isHovered) {
      startAutoplay();
    }
  }

  function cancelDrag(event) {
    if (!isDragging || event.pointerId !== pointerId) {
      return;
    }

    isDragging = false;
    viewport.classList.remove("is-dragging");
    viewport.releasePointerCapture(pointerId);
    pointerId = null;
    setTransition(true);
    render();

    if (!isHovered) {
      startAutoplay();
    }
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      if (!isAnimating) {
        shiftDisplay(-1);
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (!isAnimating) {
        shiftDisplay(1);
      }
    });
  }

  viewport.addEventListener("pointerdown", onPointerDown);
  viewport.addEventListener("pointermove", onPointerMove);
  viewport.addEventListener("pointerup", finishDrag);
  viewport.addEventListener("pointercancel", cancelDrag);
  viewport.addEventListener("lostpointercapture", cancelDrag);
  viewport.addEventListener("mouseenter", () => {
    isHovered = true;
    stopAutoplay();
  });
  viewport.addEventListener("mouseleave", () => {
    isHovered = false;
    if (!isDragging) {
      startAutoplay();
    }
  });
  track.addEventListener("transitionend", finalizeTransition);

  window.addEventListener("resize", () => {
    setTransition(false);
    render();
  });

  carousel.dataset.carouselReady = "true";
  applyState();
  goTo(index, { immediate: true });
  startAutoplay();
}

function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(initCarousel);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCarousels);
} else {
  initCarousels();
}
