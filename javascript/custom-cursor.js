const customCursor = document.querySelector(".custom-cursor");
const cursorImg = document.querySelector(".custom-cursor img");

const customCursorHandler = () => {
  // Description - Tracking mouse movement & positioning in the center
  document.addEventListener("mousemove", (event) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate the center of the screen
    const centerX = viewportWidth / 2;
    const centerY = viewportHeight / 2;

    // Get the mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the distance from the center
    const distanceFromCenterX = mouseX - centerX;
    const distanceFromCenterY = mouseY - centerY;

    customCursor.style.transform = `translate(${distanceFromCenterX}px, ${distanceFromCenterY}px)`;

    customCursor.classList.add("active");
  });

  // Hide and show custom mouse cursor when leaving and returning to the document
  document.addEventListener("mouseleave", () => {
    customCursor.style.display = "none";
  });

  document.addEventListener("mouseenter", () => {
    customCursor.style.display = "block";
  });

  let mediaQueryXxl = window.matchMedia("(max-width: 1440px)");
  // Handle hover/ image swap
  const changeCursorOnHover = () => {
    cursorImg.src = "./assets/graphics/alt-cursor-hover.svg";
    customCursor.style.width = "24px";

    if (mediaQueryXxl.matches) {
      customCursor.style.width = "18px";
    }
  };
  const revertCursorOnLeave = () => {
    cursorImg.src = "./assets/graphics/alt-cursor.svg";
    customCursor.style.width = "20px";

    if (mediaQueryXxl.matches) {
      customCursor.style.width = "14px";
    }
  };

  const updateHoverElements = () => {
    const newHoverElements = document.querySelectorAll(
      "a, button, .question, .work-item"
    );
    newHoverElements.forEach((el) => {
      el.removeEventListener("mouseenter", changeCursorOnHover); // Prevent duplicate listeners
      el.removeEventListener("mouseleave", revertCursorOnLeave);
      el.addEventListener("mouseenter", changeCursorOnHover);
      el.addEventListener("mouseleave", revertCursorOnLeave);
    });
  };

  // Initialize for the first time
  updateHoverElements();

  // Return the update function for external use
  return { updateHoverElements };
};

export const { updateHoverElements } = customCursorHandler();
