const banner1 = document.querySelector(".banner");
const banner2 = document.querySelector(".banner2");
const banner3 = document.querySelector(".banner3");
const banner4 = document.querySelector(".banner4");

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
