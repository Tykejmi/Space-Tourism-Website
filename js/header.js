let hamburger = document.querySelector(".hamburger");
let navUl = document.querySelector(".nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("active");
  hamburger.classList.toggle("open");
});

