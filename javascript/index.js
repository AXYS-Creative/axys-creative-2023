// import "./page-loading.js";
import "./custom-cursor.js";
import "./nav.js";
import "./animations.js";
import "./questions.js";
import "./lenis.js";

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
