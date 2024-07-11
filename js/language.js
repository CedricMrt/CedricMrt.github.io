let language = {
  eng: {
    navbar__link1: "Skills",
    navbar__link2: "projects",
    me: "I'm",
    job: "<span>Full stack Dev.</span> From south of France, i like build things for web with great user experiences.",
    h2Title1: "Skills",
    h2Title2: "Projects",
    h2Title4: "Send me a message",
    contactText:
      "Got a question or proposal, or just want to say hello? Go ahead.",
    labelName: "Your Name",
    labelEmail: "Your Email",
    labelMessage: "Your Message",
    cardTitle0: "A Kanban (Trello like)",
    cardTitle1: "Coffee-shop",
    cardTitle2: "Weather App",
    cardTitle5: "Car Rental",
    cardText0: "An Api Rest project with its Frontend in monorepo.",
    cardText1:
      "A 100% back-end project currently underway development to add new features ",
    cardText2: "Perfect app for learning API Fetch",
    cardText3: "Want a five-question quiz, click!",
    cardText4:
      "The TodoList, is a fundamental tool for anyone looking to improve their time management.",
    cardText5:
      "Front-end project for a car rental, coded in html, css and javascript",
    formButton: "Shoot => {}",
  },
};

const navbar__link1 = document.querySelector("#navbar__link1");
const navbar__link2 = document.querySelector("#navbar__link2");
const navbar__link3 = document.querySelector("#navbar__link3");
const me = document.querySelector("#me");
const job = document.querySelector("#job");
const h2Title1 = document.querySelector("#h2Title1");
const h2Title2 = document.querySelector("#h2Title2");
const h2Title3 = document.querySelector("#h2Title3");
const h2Title4 = document.querySelector("#h2Title4");
const contactText = document.querySelector("#contactText");
const labelName = document.querySelector("#labelName");
const labelEmail = document.querySelector("#labelEmail");
const labelMessage = document.querySelector("#labelMessage");
const cardTitle0 = document.querySelector("#cardTitle0");
const cardTitle1 = document.querySelector("#cardTitle1");
const cardTitle2 = document.querySelector("#cardTitle2");
const cardTitle5 = document.querySelector("#cardTitle5");
const cardText0 = document.querySelector("#cardText0");
const cardText1 = document.querySelector("#cardText1");
const cardText2 = document.querySelector("#cardText2");
const cardText3 = document.querySelector("#cardText3");
const cardText4 = document.querySelector("#cardText4");
const cardText5 = document.querySelector("#cardText5");
const formButton = document.querySelector("#formButton");

function changeLanguage(country) {
  const htmlLang = document.querySelector("#lang");

  if (htmlLang.className === "eng") {
    navbar__link1.textContent = language.eng.navbar__link1;
    navbar__link2.textContent = language.eng.navbar__link2;
    me.textContent = language.eng.me;
    job.innerHTML = language.eng.job;
    h2Title1.textContent = language.eng.h2Title1;
    h2Title2.textContent = language.eng.h2Title2;
    h2Title4.textContent = language.eng.h2Title4;
    contactText.textContent = language.eng.contactText;
    labelName.textContent = language.eng.labelName;
    labelEmail.textContent = language.eng.labelEmail;
    labelMessage.textContent = language.eng.labelMessage;
    cardTitle0.textContent = language.eng.cardTitle0;
    cardTitle1.textContent = language.eng.cardTitle1;
    cardTitle2.textContent = language.eng.cardTitle2;
    cardTitle5.textContent = language.eng.cardTitle5;
    cardText0.textContent = language.eng.cardText0;
    cardText1.textContent = language.eng.cardText1;
    cardText2.textContent = language.eng.cardText2;
    cardText3.textContent = language.eng.cardText3;
    cardText4.textContent = language.eng.cardText4;
    cardText5.textContent = language.eng.cardText5;
    formButton.textContent = language.eng.formButton;
  } else {
    window.location.reload();
  }
}

var checkbox = document.querySelector("#language");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    document.documentElement.className = "eng";
    changeLanguage("eng");
  } else {
    document.documentElement.className = "fr";
    changeLanguage("fr");
  }
});
