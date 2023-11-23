const html = document.querySelector("html"),
  body = document.querySelector("body"),
  pageLoader = document.querySelector("#page-loader"),
  heroBg = document.querySelector(".hero-bg"),
  heroTitle = document.querySelector(".hero-title"),
  heroSubTitle = document.querySelector(".hero-sub-title"),
  heroDescription = document.querySelector(".hero-description"),
  heroBtns = document.querySelector(".hero-btns"),
  bubble1 = document.querySelector(".bubble-1"),
  bubble2 = document.querySelector(".bubble-2"),
  bubble3 = document.querySelector(".bubble-3"),
  graphicPerson1 = document.querySelector(".graphic-person-1"),
  graphicPerson2 = document.querySelector(".graphic-person-2");

const heroElements = [
  heroTitle,
  heroSubTitle,
  heroDescription,
  heroBtns,
  bubble1,
  bubble2,
  bubble3,
  graphicPerson1,
  graphicPerson2,
];

document.onreadystatechange = function () {
  html.className += " prevent-scroll";
  body.className += " prevent-scroll";
  pageLoader.style.display = "flex";

  function finishLoading() {
    html.classList.remove("prevent-scroll");
    body.classList.remove("prevent-scroll");
    pageLoader.style.display = "none";
    heroBg.style.scale = "1";

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
