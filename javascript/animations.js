const nonGsapAnimations = () => {
  const graphicPerson1 = document.querySelector(".graphic-person-1");
  const graphicPerson2 = document.querySelector(".graphic-person-2");

  // Animate Hero Graphics based on the mouse position
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

    // Update the element's position
    graphicPerson1.style.transform = `translate(${
      distanceFromCenterX * -0.01
    }px, ${distanceFromCenterY * -0.01}px) rotate(${
      distanceFromCenterX * -0.0025
    }deg)`;

    graphicPerson2.style.transform = `translate(${
      distanceFromCenterX * 0.01
    }px, ${distanceFromCenterY * 0.01}px) rotate(${
      distanceFromCenterX * -0.0025
    }deg)`;
  });

  // Hero Parallax for bubbles
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    const bubble1 = document.querySelector(".bubble-1");
    const bubble2 = document.querySelector(".bubble-2");
    const bubble3 = document.querySelector(".bubble-3");

    bubble1.style.translate = `-100% calc(${scrollPosition * -0.18}px - 10%)`;
    bubble2.style.translate = `-45% calc(${scrollPosition * -0.26}px - 75%)`;
    bubble3.style.translate = `22% calc(${scrollPosition * -0.1}px - 25%)`;
  });
};

const gsapAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Detailed markers for debugging

  let whiteMarkers = {
    startColor: "white",
    endColor: "white",
    indent: 128,
  };

  let navyMarkers = {
    startColor: "navy",
    endColor: "navy",
    indent: 24,
  };

  let mm = gsap.matchMedia();

  mm.add(
    {
      screenSm: "(max-width: 480px)",
      screenMD: "(max-width: 768px)",
      screenLG: "(min-width: 769px)",
    },
    (context) => {
      let { screenSm, screenMD, screenLG } = context.conditions;

      // Description - Pinning Work Section
      gsap.to(".work", {
        scrollTrigger: {
          trigger: ".work",
          start: screenLG ? "top 25%" : "top 16%",
          end: "+600%",
          pin: true,
        },
      });

      // Description - Shifting project images in Work Section
      const animateWorkItem = (
        itemClass,
        startXLarge,
        startXMedium,
        startXSmall,
        endXLarge,
        endXMedium,
        endXSmall,
        scrubValue,
        endTransition
      ) => {
        gsap.fromTo(
          itemClass,
          {
            x: screenLG ? startXLarge : screenSm ? startXSmall : startXMedium,
          },
          {
            x: screenLG ? endXLarge : screenSm ? endXSmall : endXMedium,
            scrollTrigger: {
              trigger: ".work",
              scrub: scrubValue,
              ease: "none",
              start: "top 25%",
              end: endTransition,
            },
          }
        );
      };

      animateWorkItem(
        ".work-item-1",
        "40vw",
        "50vw",
        "120vw",
        "-180vw",
        // "-70vw",
        "-200vw",
        "-320vw",
        0.4,
        "+600%"
      );
      animateWorkItem(
        ".work-item-2",
        "70vw",
        "100vw",
        "200vw",
        "-150vw",
        // "-40vw",
        "-150vw",
        "-240vw",
        0.5,
        "+600%"
      );
      animateWorkItem(
        ".work-item-3",
        "100vw",
        "150vw",
        "280vw",
        "-120vw",
        // "-10vw",
        "-100vw",
        "-160vw",
        0.6,
        "+600%"
      );
      animateWorkItem(
        ".work-item-4",
        "40vw",
        "50vw",
        "120vw",
        "-180vw",
        // "-70vw",
        "-200vw",
        "-320vw",
        0.7,
        "+900%"
      );
      animateWorkItem(
        ".work-item-5",
        "70vw",
        "100vw",
        "200vw",
        "-150vw",
        // "-40vw",
        "-150vw",
        "-240vw",
        0.8,
        "+900%"
      );
      animateWorkItem(
        ".work-item-6",
        "100vw",
        "150vw",
        "280vw",
        "-120vw",
        // "-10vw",
        "-100vw",
        "-160vw",
        0.9,
        "+900%"
      );

      // END
    }
  );

  // Query for large screen animations
  mm.add("(min-width: 768px)", () => {
    // Shift Title Text for Work Section. Large screens only***
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
    // Shifting Title Text "Selected"
    animateTitleShift(".word-selected", "35%", "+400%");

    // Shifting Title Text "Work"
    animateTitleShift(".word-work", "60%", "+640%");
  });

  // Description - Animating the letters of each Section Title
  const animateTitleLetters = (selector, triggerSelector, end, markers) => {
    const titleLetters = document.querySelectorAll(selector);

    titleLetters.forEach((letter, index) => {
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

  animateTitleLetters(".work-title-letter", ".work", "+600% top");
  animateTitleLetters(".perks-title-letter", ".perks", "50% 32%");
  animateTitleLetters(".membership-title-letter", ".membership", "50% 32%");
  animateTitleLetters(".questions-title-letter", ".questions", "50% 32%");
};

nonGsapAnimations();

gsapAnimations();
