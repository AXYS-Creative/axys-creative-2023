//
// Media Queries in JavsScript
//

let mediaQuery = window.matchMedia("(max-width: 768px)");

if (mediaQuery.matches) {
  console.log("Narrow viewport");
} else {
  console.log("Wide viewport");
}

// You can also add an event listener to handle changes in the viewport size
mediaQuery.addEventListener("change", (event) => {
  if (event.matches) {
    console.log("Changed to narrow viewport");
  } else {
    console.log("Changed to wide viewport");
  }
});
