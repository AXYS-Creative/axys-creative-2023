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
          scrub: true,
          start: "top 25%",
          end: endTrigger,
        },
      }
    );
  };

  // Query for large screen animations
  mm.add("(min-width: 768px)", () => {
    // Shifting Title Text "Selected"
    animateTitleShift(".word-selected", "39.5%", "+400%");

    // Shifting Title Text "Work"
    animateTitleShift(".word-work", "60%", "+640%");
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

gsapAnimations();
