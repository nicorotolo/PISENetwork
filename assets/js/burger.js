document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const sideMenu = document.querySelector(".side-menu");

  burger.addEventListener("change", () => {
    if (burger.checked) {
      sideMenu.style.display = "block";
    } else {
      sideMenu.style.display = "none";
    }
  });
});
