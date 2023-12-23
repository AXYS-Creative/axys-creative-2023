const nonGsapAnimations = () => {
  // Description - Media Query Declarations
  let mqMinXxl = window.matchMedia("(min-width: 1921px)");
  let mqMaxMd = window.matchMedia("(max-width: 768px)");
  let mqMaxSm = window.matchMedia("(max-width: 480px)");

  // Description - Animating Section graphics based on mouse position
  document.addEventListener("mousemove", (event) => {
    // Calculate the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Get the mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the distance from the center
    const distanceFromCenterX = mouseX - centerX;
    const distanceFromCenterY = mouseY - centerY;

    // Description - Function to select and update the element position
    const handleMouseTrack = (
      element,
      xOffset = 0.01,
      yOffset = 0.01,
      rotate = 0.0015
    ) => {
      document.querySelector(element).style.transform = `translate(${
        distanceFromCenterX * xOffset
      }px, ${distanceFromCenterY * yOffset}px) rotate(${
        distanceFromCenterX * rotate
      }deg)`;
    };

    handleMouseTrack(".hero-peep-1", -0.01, -0.01);
    handleMouseTrack(".hero-peep-2");
    handleMouseTrack(".perks-peep");
    handleMouseTrack(".membership-peep");
    handleMouseTrack(".questions-peep");
    handleMouseTrack(".pre-footer-img-1-peep");
    handleMouseTrack(".pre-footer-img-2-peep", -0.01, -0.01);

    if (mqMaxMd.matches) {
      handleMouseTrack(".membership-peep", -0.01, 0.01, -0.0015);
    }
  });

  // Description - Parallax for bubbles
  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    // Description - Function for reusable parallax
    const handleParallax = (
      element,
      referenceElement,
      xValue,
      scrollMultiplier,
      yOffset
    ) => {
      if (referenceElement) {
        const elementTop =
          document.querySelector(referenceElement).getBoundingClientRect().top +
          window.scrollY;
        const relativeScrollPosition = window.scrollY - elementTop;

        document.querySelector(element).style.translate = `${xValue} calc(${
          relativeScrollPosition * scrollMultiplier
        }px - ${yOffset})`;
      } else {
        document.querySelector(element).style.translate = `${xValue} calc(${
          scrollPosition * scrollMultiplier
        }px - ${yOffset})`;
      }
    };

    handleParallax(".hero-bubble-1", null, "-100%", -0.18, "10%");
    handleParallax(".hero-bubble-2", null, "-45%", -0.26, "75%");
    handleParallax(".hero-bubble-3", null, "22%", -0.1, "25%");
    handleParallax(".perks-bubble-1", ".perks-img", "-64%", -0.14, "52%"); // Yellow Bubble
    handleParallax(".perks-bubble-2", ".perks-img", "-24%", -0.2, "116%"); // Grey Bubble
    handleParallax(
      ".membership-bubble-1",
      ".membership-img",
      "-24%",
      -0.2,
      "86%"
    ); // Orange Bubble
    handleParallax(
      ".membership-bubble-2",
      ".membership-img",
      "-64%",
      -0.1,
      "124%"
    ); // Green Bubble
    handleParallax(
      ".questions-bubble-1",
      ".questions-img",
      "-46%",
      -0.1,
      "64%"
    ); // Purple Bubble
    handleParallax(".questions-bubble-2", ".questions-img", "0%", -0.2, "156%"); // Yellow Bubble

    // Don't worry about altering these media queries until the work section is done
    if (mqMinXxl.matches) {
      handleParallax(".perks-bubble-1", "-72%", -0.14, "-720%");
      handleParallax(".perks-bubble-2", "-16%", -0.18, "-620%");
    }

    if (mqMaxMd.matches) {
      handleParallax(".perks-bubble-1", "-72%", -0.14, "-320%");
      handleParallax(".perks-bubble-2", "-16%", -0.18, "-320%");
    }

    if (mqMaxSm.matches) {
      handleParallax(".perks-bubble-1", "-72%", -0.14, "-56%");
      handleParallax(".perks-bubble-2", "-16%", -0.18, "-40%");
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
      screenMd: "(max-width: 768px)",
      screenLg: "(min-width: 769px)",
    },
    (context) => {
      let { screenSm, screenMd, screenLg } = context.conditions;

      // Description - Pinning Work Section
      gsap.to(".work", {
        scrollTrigger: {
          trigger: ".work",
          start: screenLg ? "top 3%" : "top 16%",
          end: "+480%",
          pin: true,
        },
      });

      // Description - Shifting project images in Work Section
      function workItemTimeline(itemNumber, scrubFactor) {
        return gsap
          .timeline({
            scrollTrigger: {
              trigger: ".work",
              scrub: scrubFactor,
              start: "top 70%",
              end: "+580%",
              ease: "linear",
              // markers: navyMarkers,
            },
          })
          .to(`.work-item-${itemNumber}`, {
            x: screenSm ? "-539vw" : screenMd ? "-271vw" : "-113vw",
          });
      }

      const workItems = document.querySelectorAll(".work-item");

      workItems.forEach((el, index) => {
        workItemTimeline(index + 1, 0.12 * (index + 1));
      });

      // END - Shifting project images

      // Descriptiion - Animate the membership prcing cards
      const animateMembershipCards = (selector, trigger, delay) => {
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: screenMd ? 120 : 200,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.25,
            delay: delay,
            ease: screenMd ? "elastic.out(1, 0.75)" : "elastic.out(1, 0.4)",
            scrollTrigger: {
              trigger: trigger,
              start: "top 40%",
              end: "75% top",
              toggleActions: "restart reverse restart reverse",
            },
          }
        );
      };

      animateMembershipCards(".membership-card-1", ".membership", 0);
      animateMembershipCards(".membership-card-2", ".membership", 0.25);

      // Description - Question List animation, be mindful it may clash with hover state.
      gsap.fromTo(
        ".faq-item",
        {
          x: screenMd ? -24 : -48,
          opacity: 0,
          pointerEvents: "none",
        },
        {
          x: 0,
          opacity: 1,
          pointerEvents: "all",
          stagger: 0.08,
          ease: screenMd ? "back.out(1)" : "back.out(2)",
          scrollTrigger: {
            trigger: ".questions",
            start: "top center",
            end: "center top",
            toggleActions: "restart reverse restart reverse",
          },
        }
      );
    }
  );

  // Query only for large screen animations (Shift Work Title)
  mm.add("(min-width: 768px)", () => {
    // Shift Title Text for Work Section. Large screens only***
    const shiftWorkTitle = gsap.timeline({
      scrollTrigger: {
        trigger: ".work",
        scrub: true,
        start: "top 10%",
        end: "+620%",
      },
    });

    shiftWorkTitle
      // .fromTo(
      .fromTo(
        ".word-selected",
        {
          translateX: "35%",
        },
        {
          translateX: 0,
        }
      );

    const shiftWorkTitle2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".work",
        scrub: true,
        start: "top 10%",
        end: "+620%",
      },
    });

    shiftWorkTitle2.fromTo(
      ".word-work",
      {
        translateX: "60%",
      },
      {
        translateX: 0,
      }
    );
  });

  // Description - Animating the letters of each Section Title
  const animateTitleLetters = (
    selector,
    triggerSelector,
    end = "50% 32%",
    markers
  ) => {
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

  animateTitleLetters(".work-title-letter", ".work", "+480% top");
  animateTitleLetters(".perks-title-letter", ".perks");
  animateTitleLetters(".membership-title-letter", ".membership");
  animateTitleLetters(".membership-title-letter-sm", ".membership");
  animateTitleLetters(".questions-title-letter", ".questions");
  animateTitleLetters(".questions-title-letter-sm", ".questions");

  // Description - Function to toggle the '.active' css class. Used in Perks, Membership, & Questions Section.
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
  toggleClassActive(".perks-peep-wrapper", ".perks", "top center", "50% top");
  toggleClassActive(".perks-bubble-1", ".perks", "top center", "40% 5%");
  toggleClassActive(".perks-bubble-2", ".perks", "top center", "40% 5%");
  toggleClassActive(
    "#perks-title-graphic-wrapper-1",
    ".perks-title",
    "top center",
    "center top"
  );
  toggleClassActive(
    "#perks-title-graphic-wrapper-1-b",
    ".perks-title",
    "top center",
    "center top"
  );
  toggleClassActive(
    "#perks-title-graphic-wrapper-2",
    ".perks-title",
    "top center",
    "center top"
  );
  toggleClassActive(
    "#perks-title-graphic-wrapper-2-b",
    ".perks-title",
    "top center",
    "center top"
  );

  // Membership Section
  toggleClassActive(
    ".membership-peep-wrapper",
    ".membership",
    "top center",
    "50% top"
  );
  toggleClassActive(
    ".membership-bubble-1",
    ".membership",
    "top center",
    "40% 5%"
  );
  toggleClassActive(
    ".membership-bubble-2",
    ".membership",
    "top center",
    "40% 5%"
  );
  toggleClassActive(".ribbon", ".membership", "top center", "40% 5%");
  toggleClassActive(
    "#membership-title-graphic-wrapper-2",
    ".membership-title",
    "top center",
    "center top"
  );
  toggleClassActive(
    "#membership-title-graphic-wrapper-2-sm",
    ".membership-title",
    "top center",
    "center top"
  );

  // Questions Section
  toggleClassActive(
    ".questions-cta-1",
    ".questions-btns",
    "top 95%",
    "bottom 15%"
  );
  toggleClassActive(
    ".questions-cta-2",
    ".questions-btns",
    "top 95%",
    "bottom 15%"
  );
  toggleClassActive(
    ".questions-peep-wrapper",
    ".questions-peep-wrapper",
    "top 75%",
    "center top"
  );
  toggleClassActive(
    ".questions-bubble-1",
    ".questions-peep-wrapper",
    "top 75%",
    "center top"
  );
  toggleClassActive(
    ".questions-bubble-2",
    ".questions-peep-wrapper",
    "top 75%",
    "center top"
  );
  toggleClassActive(
    ".thought-cloud",
    ".thought-cloud",
    "top center",
    "center top"
  );

  // Pre Footer
  toggleClassActive(
    ".pre-footer-title",
    ".pre-footer",
    "top 60%",
    "bottom top"
  );
  toggleClassActive(
    ".pre-footer-img-1-peep-wrapper",
    ".pre-footer",
    "top center",
    "50% top"
  );
  toggleClassActive(
    ".pre-footer-cta",
    ".pre-footer-main",
    "top 40%",
    "bottom top"
  );
  toggleClassActive(
    ".pre-footer-img-1-bubble-1",
    ".pre-footer",
    "top 35%",
    "40% 5%"
  );
  toggleClassActive(
    ".pre-footer-img-1-bubble-2",
    ".pre-footer",
    "top 35%",
    "40% 5%"
  );
  toggleClassActive(
    ".pre-footer-img-1-bubble-3",
    ".pre-footer",
    "top 35%",
    "40% 5%"
  );
  toggleClassActive(
    ".pre-footer-img-2-peep-wrapper",
    ".pre-footer",
    "top center",
    "50% top"
  );
  toggleClassActive(
    ".pre-footer-img-2-bubble-1",
    ".pre-footer",
    "top 35%",
    "40% 5%"
  );
  toggleClassActive(
    ".pre-footer-img-2-bubble-2",
    ".pre-footer",
    "top 35%",
    "40% 5%"
  );

  // Description - Function to handle Section Description animation. Used in Perks, Membership, & Questions Section.
  const animateSectionDescription = (
    selector,
    trigger,
    start,
    end,
    markers
  ) => {
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
          start: start,
          end: end,
          markers: markers,
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  };

  animateSectionDescription(
    ".perks-description",
    ".perks",
    "top 35%",
    "center 12%"
  );
  animateSectionDescription(
    ".membership-description",
    ".membership",
    "top 45%",
    "center 25%"
  );
  animateSectionDescription(
    ".questions-description",
    ".questions-description",
    "top 80%",
    "bottom 20%"
  );
  animateSectionDescription(
    ".pre-footer-description",
    ".pre-footer-description",
    "top 80%",
    "bottom 20%"
  );
};

nonGsapAnimations();

gsapAnimations();
