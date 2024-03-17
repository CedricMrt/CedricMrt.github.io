/* ############# MENU BURGER###################### */

const toggle = document.querySelector("#toggle");
const body = document.querySelector("body");
const nav = document.querySelector("nav");

toggle.addEventListener("click", function () {
  body.classList.toggle("active");
});

document.addEventListener("scroll", function () {
  nav.classList.add("scroll");
});
