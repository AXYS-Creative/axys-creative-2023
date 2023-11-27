const nonGsapAnimations = () => {
  const graphicPerson1 = document.querySelector(".graphic-person-1"),
    graphicPerson2 = document.querySelector(".graphic-person-2"),
    perksPerson = document.querySelector(".perks-person");

  // Animating Section graphics based on the mouse position
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

    perksPerson.style.transform = `translate(${distanceFromCenterX * 0.01}px, ${
      distanceFromCenterY * 0.01
    }px) rotate(${distanceFromCenterX * -0.0025}deg)`;
  });

  // Parallax for bubbles
  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    const bubble1 = document.querySelector(".bubble-1"),
      bubble2 = document.querySelector(".bubble-2"),
      bubble3 = document.querySelector(".bubble-3"),
      perksBubble1 = document.querySelector(".perks-bubble-1"),
      perksBubble2 = document.querySelector(".perks-bubble-2");

    // Description - Function for reusable parallax
    const handleParallax = (element, xValue, scrollMultiplier, yOffset) => {
      element.style.translate = `${xValue} calc(${
        scrollPosition * scrollMultiplier
      }px - ${yOffset})`;
    };

    handleParallax(bubble1, "-100%", -0.18, "10%");
    handleParallax(bubble2, "-45%", -0.26, "75%");
    handleParallax(bubble3, "22%", -0.1, "25%");
    handleParallax(perksBubble1, "-72%", -0.18, "-480%");
    handleParallax(perksBubble2, "-16%", -0.26, "-480%");

    // Description - Media Queries for parallax effect
    let mediaQuerySm = window.matchMedia("(max-width: 480px)");

    if (mediaQuerySm.matches) {
      handleParallax(perksBubble1, "-72%", -0.14, "-56%");
      handleParallax(perksBubble2, "-16%", -0.18, "-40%");
    }
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

  // Description - Function to toggle the '.active' css class. Used in Perks Section, Membership Section, ...
  const toggleClassActive = (selector, trigger, start, end, markers) => {
    gsap.to(selector, {
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        markers: markers,
        onEnter: () => document.querySelector(selector).classList.add("active"),
        onLeave: () =>
          document.querySelector(selector).classList.remove("active"),
        onEnterBack: () =>
          document.querySelector(selector).classList.add("active"),
        onLeaveBack: () =>
          document.querySelector(selector).classList.remove("active"),
      },
    });
  };

  toggleClassActive(".perks-columns", ".perks", "top center", "50% 26%");
  toggleClassActive(".perks-cta-1", ".perks", "top 16%", "50% 6%");
  toggleClassActive(".perks-cta-2", ".perks", "top 16%", "50% 6%");
  toggleClassActive(".perks-img", ".perks", "top center", "50% top");
  toggleClassActive(".perks-bubble-1", ".perks", "top center", "40% 5%");
  toggleClassActive(".perks-bubble-2", ".perks", "top center", "40% 5%");

  // Description - Function to handle Section Description animation. Used in Perks Section, Membership Section, ...
  const animateSectionDescription = (selector, trigger) => {
    gsap.fromTo(
      selector,
      {
        opacity: 0,
        x: -24,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.75,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: trigger,
          start: "top 40%",
          end: "50% 12%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  };

  animateSectionDescription(".perks-description", ".perks");
  animateSectionDescription(".membership-description", ".membership");

  const animateMembershipCards = (selector, trigger, delay) => {
    gsap.fromTo(
      selector,
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.25,
        delay: delay,
        ease: "elastic.out(1, 0.4)",
        scrollTrigger: {
          trigger: trigger,
          start: "top 40%",
          end: "50% 12%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  };

  animateMembershipCards(".membership-card-1", ".membership", 0);
  animateMembershipCards(".membership-card-2", ".membership", 0.25);
};

nonGsapAnimations();

gsapAnimations();
