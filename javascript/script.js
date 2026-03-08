/Target the button ID/;
const btn = document.getElementById("menu-btn");
/Target the side menu ID/;
const hamburgerMenu = document.getElementById("side-menu");

/Add an event listener to the button (hamburger icon) that when clicked the side menu will be toggled on and off/;
btn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});
