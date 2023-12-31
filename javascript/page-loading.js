const html = document.querySelector("html"),
  body = document.querySelector("body"),
  pageLoader = document.querySelector("#page-loader"),
  hero = document.querySelector(".hero"),
  heroTitle = document.querySelector(".hero-title"),
  heroSubTitle = document.querySelector(".hero-sub-title"),
  heroDescription = document.querySelector(".hero-description"),
  heroCta1 = document.querySelector(".hero-cta-1"),
  heroCta2 = document.querySelector(".hero-cta-2"),
  heroBubble1 = document.querySelector(".hero-bubble-1"),
  heroBubble2 = document.querySelector(".hero-bubble-2"),
  heroBubble3 = document.querySelector(".hero-bubble-3"),
  heroPeep1 = document.querySelector(".hero-peep-1"),
  heroPeep2 = document.querySelector(".hero-peep-2"),
  menuBtnWrapper = document.querySelector(".menu-btn-wrapper");

const loadElements = [
  heroTitle,
  heroSubTitle,
  heroDescription,
  heroCta1,
  heroCta2,
  heroBubble1,
  heroBubble2,
  heroBubble3,
  heroPeep1,
  heroPeep2,
  menuBtnWrapper,
];

document.onreadystatechange = function () {
  html.className += " prevent-scroll";
  body.className += " prevent-scroll";
  pageLoader.style.display = "flex";
  hero.style.scale = window.innerWidth > 1920 ? "2" : "1.25";

  function finishLoading() {
    pageLoader.classList.add("loading-done");

    setTimeout(() => {
      loadElements.forEach((elem) => {
        elem.classList.add("active");
      });
      html.classList.remove("prevent-scroll");
      body.classList.remove("prevent-scroll");
      hero.style.scale = "1";
    }, 500);

    setTimeout(() => {
      pageLoader.remove();
    }, 1000);
  }

  setTimeout(function () {
    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading());
    }
  }, 1200);
};
