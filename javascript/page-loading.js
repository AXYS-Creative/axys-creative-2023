const html = document.querySelector("html"),
  body = document.querySelector("body"),
  pageLoader = document.querySelector("#page-loader"),
  hero = document.querySelector(".hero"),
  heroTitle = document.querySelector(".hero-title"),
  heroSubTitle = document.querySelector(".hero-sub-title"),
  heroDescription = document.querySelector(".hero-description"),
  heroBtns = document.querySelector(".hero-btns"),
  bubble1 = document.querySelector(".bubble-1"),
  bubble2 = document.querySelector(".bubble-2"),
  bubble3 = document.querySelector(".bubble-3"),
  graphicPerson1 = document.querySelector(".graphic-person-1"),
  graphicPerson2 = document.querySelector(".graphic-person-2"),
  menuBtnWrapper = document.querySelector(".menu-btn-wrapper");

const loadElements = [
  heroTitle,
  heroSubTitle,
  heroDescription,
  heroBtns,
  bubble1,
  bubble2,
  bubble3,
  graphicPerson1,
  graphicPerson2,
  menuBtnWrapper,
];

document.onreadystatechange = function () {
  html.className += " prevent-scroll";
  body.className += " prevent-scroll";
  pageLoader.style.display = "flex";
  hero.style.scale = "1.2";

  function finishLoading() {
    html.classList.remove("prevent-scroll");
    body.classList.remove("prevent-scroll");
    pageLoader.style.display = "none";
    hero.style.scale = "1";

    loadElements.forEach((elem) => {
      elem.classList.add("active");
    });
  }

  setTimeout(function () {
    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading());
    }
  }, 2500);
};
