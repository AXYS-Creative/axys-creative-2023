export const nonGsapAnimations = () => {
  const graphicPerson1 = document.querySelector(".graphic-person-1");
  const graphicPerson2 = document.querySelector(".graphic-person-2");

  // Animate Hero Graphics
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

    // Apply a ratio to reduce the movement effect
    const ratio = 0.01; // Adjust the ratio as needed for the "nudge" effect
    const negativeRatio = -0.01; // Adjust the ratio as needed for the "nudge" effect

    // Update the element's position
    graphicPerson1.style.transform = `translate(${
      distanceFromCenterX * negativeRatio
    }px, ${distanceFromCenterY * negativeRatio}px)`;

    graphicPerson2.style.transform = `translate(${
      distanceFromCenterX * ratio
    }px, ${distanceFromCenterY * ratio}px)`;
  });

  // Hero Parallax
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    const bubble1 = document.querySelector(".bubble-1");
    const bubble2 = document.querySelector(".bubble-2");
    const bubble3 = document.querySelector(".bubble-3");

    bubble1.style.translate = `-100% calc(${scrollPosition * -0.18}px - 10%)`;
    bubble2.style.translate = `-45% calc(${scrollPosition * -0.32}px - 75%)`;
    bubble3.style.translate = `22% calc(${scrollPosition * -0.05}px - 25%)`;
  });
};

export const gsapAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  mm.add(
    {
      screenMD: "(max-width: 768px)",
      screenLG: "(min-width: 769px)",
    },
    (context) => {
      let { screenMD, screenLG } = context.conditions;

      // Description - Pinning Section
      gsap.to(".work", {
        scrollTrigger: {
          trigger: ".work",
          start: screenLG ? "top 25%" : "top 16%",
          end: "+1200%",
          pin: true,
          // markers: {
          //   startColor: "navy",
          //   endColor: "navy",
          //   indent: 128,
          // },
        },
      });
    }
  );

  // Shift Title Text. Large screens onlyl***
  const animateTitleShift = (selector, startTranslateX, endTrigger) => {
    gsap.fromTo(
      selector,
      { translateX: startTranslateX },
      {
        translateX: 0,
        ease: "ease",
        scrollTrigger: {
          trigger: ".work",
          scrub: 1,
          start: "top 25%",
          end: endTrigger,
        },
      }
    );
  };

  // Query for large screen animations
  mm.add("(min-width: 768px)", () => {
    // Shifting Title Text "Selected"
    animateTitleShift(".word-selected", "38%", "+400%");

    // Shifting Title Text "Work"
    animateTitleShift(".word-work", "59%", "+640%");
  });

  const animateTitleCharacters = (selector, triggerSelector, end, markers) => {
    const titleCharacters = document.querySelectorAll(selector);

    titleCharacters.forEach((letter, index) => {
      gsap.fromTo(
        letter,
        { y: "100%" },
        {
          y: 0,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: triggerSelector,
            start: "top center",
            end: end,
            toggleActions: "restart reverse restart reverse",
            markers: markers,
          },
          duration: 0.25 + 0.05 * index,
          delay: 0.05 * index,
        }
      );
    });
  };

  // Animate work title characters.
  animateTitleCharacters(".work-title-character", ".work", "+1200% top");

  // Animate perks title characters.
  animateTitleCharacters(".perks-title-character", ".perks", "50% 32%");

  // Animate membership title characters.
  animateTitleCharacters(
    ".membership-title-character",
    ".membership",
    "50% 32%"
  );

  // For Markers ... Pass as the fourth argument to the function above or below
  // {
  //   startColor: "navy",
  //   endColor: "navy",
  //   indent: 128,
  // }
};

nonGsapAnimations();

gsapAnimations();
