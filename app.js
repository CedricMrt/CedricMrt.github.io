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

/* ################## sign in / sign up ############### */

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const loginButton = document.querySelector(".user");
const loginClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("on");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("on");
});

loginButton.addEventListener("click", () => {
  wrapper.classList.add("show-popup");
});

loginClose.addEventListener("click", () => {
  wrapper.classList.remove("show-popup");
});

/* ################## FORM  (for fun) ################ */

const button = document.querySelector("#button");
const city = document.querySelector("#search");

button.addEventListener("click", () => {
  window.open(`http://maps.google.com/?q=${city.value}`);
});

/* ################# cars cards ######### */

function openPage(button) {
  const text = button.parentElement
    .querySelector(".card-text")
    .textContent.trim();
  const adress = "http://" + text + ".com";
  window.open(adress, "_blank");
  console.log(text);
}
