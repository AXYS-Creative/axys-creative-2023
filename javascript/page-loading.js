const html = document.querySelector("html"),
  body = document.querySelector("body"),
  pageLoader = document.querySelector("#page-loader"),
  hero = document.querySelector(".hero"),
  heroTitle = document.querySelector(".hero-title"),
  heroSubTitle = document.querySelector(".hero-sub-title"),
  heroDescription = document.querySelector(".hero-description"),
  heroCta1 = document.querySelector(".hero-cta-1"),
  heroCta2 = document.querySelector(".hero-cta-2"),
  bubble1 = document.querySelector(".bubble-1"),
  bubble2 = document.querySelector(".bubble-2"),
  bubble3 = document.querySelector(".bubble-3"),
  heroPeep1 = document.querySelector(".hero-peep-1"),
  heroPeep2 = document.querySelector(".hero-peep-2"),
  menuBtnWrapper = document.querySelector(".menu-btn-wrapper");

const loadElements = [
  heroTitle,
  heroSubTitle,
  heroDescription,
  heroCta1,
  heroCta2,
  bubble1,
  bubble2,
  bubble3,
  heroPeep1,
  heroPeep2,
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
  }, 1000);
};
