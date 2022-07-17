const HAMBURGER = document.querySelector(".hamburger");
const NAV_UL = document.querySelector(".nav-ul");

HAMBURGER.addEventListener("click", () => {
  NAV_UL.classList.toggle("active");
  HAMBURGER.classList.toggle("open");
});

