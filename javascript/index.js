import { toggleNav, closeNav } from "./nav.js";
import { gsapAnimations } from "./animations.js";
import { questions } from "./questions.js";
import { smoothScroll } from "./lenis.js";

// Refresh page on browser resize at 768
(function () {
  let lastWindowWidth = window.innerWidth;

  function checkWidthAndRefresh() {
    let currentWindowWidth = window.innerWidth;
    let threshold = 768;

    if (
      (lastWindowWidth <= threshold && currentWindowWidth > threshold) ||
      (lastWindowWidth > threshold && currentWindowWidth <= threshold)
    ) {
      lastWindowWidth = currentWindowWidth;
      window.location.reload();
    } else {
      lastWindowWidth = currentWindowWidth;
    }
  }

  window.addEventListener("resize", checkWidthAndRefresh);
})();
