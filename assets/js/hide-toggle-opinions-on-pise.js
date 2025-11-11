document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".quote-details .hide-btn")
    .forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        var details = e.target.closest("details");
        details.removeAttribute("open");
      });
    });
});
