(function () {
  function pad(n) { return String(n).padStart(2, "0"); }

  function tick(container, deadlineStr) {
    const deadline = new Date(deadlineStr).getTime();
    const now = Date.now();
    const diff = Math.max(0, deadline - now);

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const daysEl = container.querySelector('[data-part="days"]');
    const hoursEl = container.querySelector('[data-part="hours"]');
    const minutesEl = container.querySelector('[data-part="minutes"]');
    const secondsEl = container.querySelector('[data-part="seconds"]');

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minutesEl) minutesEl.textContent = pad(minutes);
    if (secondsEl) secondsEl.textContent = pad(seconds);
  }

  document.querySelectorAll("[data-deadline]").forEach(function (el) {
    const hasCountdownParts = el.querySelector('[data-part="days"]');
    if (!hasCountdownParts) return;

    const deadlineStr = el.getAttribute("data-deadline");
    if (!deadlineStr) return;

    tick(el, deadlineStr);
    setInterval(function () { tick(el, deadlineStr); }, 1000);
  });
})();
