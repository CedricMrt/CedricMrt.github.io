/* ######## navBar script ####### */
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector("#burger");

  burger.addEventListener("click", (e) => {
    navbar.classList.toggle("show-nav");
  });

  const navbarLinks = document.querySelectorAll(".navbar a");
  navbarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navbar.classList.toggle("show-nav");
    });
  });
}
toggleMenu();

/* ####### toggle input dark/light mode ######## */
const body = document.querySelector("body");
document.querySelector("#darkMode").addEventListener("click", () => {
  body.classList.toggle("dark");
});

/* ######## page animation ########## */

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > observerOptions.threshold) {
      entry.target.classList.add("reveal--visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);
document
  .querySelectorAll('[class*="reveal-"]')
  .forEach((element) => observer.observe(element));
