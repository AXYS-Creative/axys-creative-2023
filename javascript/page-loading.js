const html = document.querySelector("html"),
  body = document.querySelector("body"),
  pageLoader = document.querySelector("#page-loader"),
  heroBg = document.querySelector(".hero-bg"),
  heroTitle = document.querySelector(".hero-title"),
  heroSubTitle = document.querySelector(".hero-sub-title"),
  heroDescription = document.querySelector(".hero-description"),
  heroBtns = document.querySelector(".hero-btns");

const heroElements = [heroTitle, heroSubTitle, heroDescription, heroBtns];

document.onreadystatechange = function () {
  html.className += " prevent-scroll";
  body.className += " prevent-scroll";
  pageLoader.style.display = "inline";

  function finishLoading() {
    html.classList.remove("prevent-scroll");
    body.classList.remove("prevent-scroll");
    pageLoader.style.display = "none";
    heroBg.style.scale = "1";
    // heroTitle.classList.add("active");

    heroElements.forEach((elem) => {
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
