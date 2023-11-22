const root = document.getElementsByTagName("html")[0],
  body = document.getElementsByTagName("body")[0],
  pageLoader = document.querySelector("#page-loader"),
  heroBg = document.querySelector(".hero-bg"),
  heroTitle = document.querySelector(".hero-title");

document.onreadystatechange = function () {
  root.className += " prevent-scroll";
  body.className += " prevent-scroll";
  pageLoader.style.display = "inline";

  function finishLoading() {
    root.classList.remove("prevent-scroll");
    body.classList.remove("prevent-scroll");
    pageLoader.style.display = "none";
    heroBg.style.scale = "1";
    heroTitle.classList.add("active");
  }

  setTimeout(function () {
    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading());
    }
  }, 2500);
};
