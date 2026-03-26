document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".js-flip-countdown[data-deadline]");
  if (!els.length) return;

  if (typeof window.Countdown !== "function") {
    console.warn("Countdown library not loaded.");
    return;
  }

  els.forEach((el) => {
    const deadlineStr = el.getAttribute("data-deadline");
    const deadline = new Date(deadlineStr);

    if (Number.isNaN(deadline.getTime())) {
      console.warn("Invalid deadline_iso:", deadlineStr);
      return;
    }

    const cd = new Countdown({
      cont: el,
      countdown: true,
      date: deadline.getTime(),
      outputFormat: "day|hour|minute|second",
      outputTranslation: {
        day: "Days",
        hour: "Hours",
        minute: "Minutes",
        second: "Seconds",
      },
    });

    cd.start();
  });
});
