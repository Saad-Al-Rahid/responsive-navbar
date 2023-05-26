let openCloseBtn = document.querySelector(".open__close__btn");
let navList = document.querySelector(".nav__list");
let overlay = document.querySelector(".overlay");

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav__list li a");

openCloseBtn.addEventListener("click", function () {
  openCloseBtn.classList.toggle("is__active");
  navList.classList.toggle("is__active");
  overlay.classList.toggle("is__active");
});

overlay.addEventListener("click", function () {
  openCloseBtn.classList.remove("is__active");
  navList.classList.remove("is__active");
  overlay.classList.remove("is__active");
});

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    navLinks.forEach(function (navLink) {
      return navLink.classList.remove("is__active");
    });
    navLink.classList.add("is__active");

    openCloseBtn.classList.remove("is__active");
    navList.classList.remove("is__active");
    overlay.classList.remove("is__active");
  });
});

let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList[this.window.scrollY > 400 ? "add" : "remove"]("is__active");

  section.forEach(function (sec) {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("is__active");
        document
          .querySelector(".nav__list li a[href*=" + id + "]")
          .classList.add("is__active");
      });
    }
  });
});
