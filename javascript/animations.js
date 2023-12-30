const nonGsapAnimations = () => {
  // Description - Media Query Declarations
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

    // Responsive Bubble Offset - (Bo)
    let perksBo1 = mqMaxMd.matches ? -0.06 : -0.08;
    let perksBo2 = mqMaxMd.matches ? -0.1 : -0.14;
    let membershipBo1 = mqMaxMd.matches ? -0.04 : -0.1;
    let membershipBo2 = mqMaxMd.matches ? -0.08 : -0.2;
    let questionsBo1 = mqMaxMd.matches ? -0.04 : -0.1;
    let questionsBo2 = mqMaxMd.matches ? -0.08 : -0.2;

    handleParallax(".hero-bubble-1", null, "-92%", -0.1, "16%");
    handleParallax(".hero-bubble-2", null, "-40%", -0.16, "75%");
    handleParallax(".hero-bubble-3", null, "24%", -0.06, "25%");
    handleParallax(".perks-bubble-1", ".perks-img", "-64%", perksBo1, "52%"); // Yellow Bubble
    handleParallax(".perks-bubble-2", ".perks-img", "-24%", perksBo2, "116%"); // Grey Bubble
    handleParallax(
      ".membership-bubble-1", // Green Bubble
      ".membership-img",
      "-80%",
      membershipBo1,
      "148%"
    );
    handleParallax(
      ".membership-bubble-2", // Orange Bubble
      ".membership-img",
      "-32%",
      membershipBo2,
      "80%"
    );
    handleParallax(
      ".questions-bubble-1", // Purple Bubble
      ".questions-img",
      "-40%",
      questionsBo1,
      "64%"
    );
    handleParallax(
      ".questions-bubble-2", // Yellow Bubble
      ".questions-img",
      "0%",
      questionsBo2,
      "156%"
    );
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

  let responsiveGsap = gsap.matchMedia();

  responsiveGsap.add(
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
            },
          })
          .to(`.work-item-${itemNumber}`, {
            x: screenSm ? "-570vw" : screenMd ? "-288vw" : "-140vw",
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
              start: "top 80%",
              end: screenMd ? "80% top" : "64% top",
              toggleActions: "restart reverse restart reverse",
            },
          }
        );
      };

      animateMembershipCards(".membership-card-1", ".membership-options", 0);
      animateMembershipCards(".membership-card-2", ".membership-options", 0.25);

      // Description - Question List animation
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
            trigger: ".questions-list",
            start: "top 80%",
            end: screenMd ? "80% top" : "64% top",
            toggleActions: "restart reverse restart reverse",
          },
        }
      );
    }
  );

  // Query only for large screen animations (Shift Work Title)
  responsiveGsap.add("(min-width: 768px)", () => {
    // Shift Title Text for Work Section. Large screens only***
    const shiftWorkTitle = gsap.timeline({
      scrollTrigger: {
        trigger: ".work",
        scrub: true,
        start: "top 10%",
        end: "+620%",
      },
    });

    shiftWorkTitle.fromTo(
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
    start = "top 92%",
    end = "75% 4%",
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
            start: start,
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

  animateTitleLetters(".work-title-letter", ".work", undefined, "+480% top");
  animateTitleLetters(".perks-title-letter", ".perks-title");
  animateTitleLetters(".membership-title-letter", ".membership");
  animateTitleLetters(".membership-title-letter-sm", ".membership");
  animateTitleLetters(".questions-title-letter", ".questions");
  animateTitleLetters(".questions-title-letter-sm", ".questions");

  //
  // Description - Function to toggle the '.active' css class. Used in Perks, Membership, & Questions Section.
  const toggleClassActive = (
    selector,
    trigger,
    start = "top 92%",
    end = "center 4%",
    markers
  ) => {
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

  // Perks Section
  toggleClassActive(".perks-columns", ".perks-columns");
  toggleClassActive(".perks-cta-1", ".perks-btns");
  toggleClassActive(".perks-cta-2", ".perks-btns");
  toggleClassActive(".perks-peep-wrapper", ".perks-peep-wrapper");
  toggleClassActive(".perks-bubble-1", ".perks-peep-wrapper");
  toggleClassActive(".perks-bubble-2", ".perks-peep-wrapper");
  toggleClassActive("#perks-title-img-wrapper-1", ".perks-title");
  toggleClassActive("#perks-title-img-wrapper-1-b", ".perks-title");
  toggleClassActive("#perks-title-img-wrapper-2", ".perks-title");
  toggleClassActive("#perks-title-img-wrapper-2-b", ".perks-title");

  // Membership Section
  toggleClassActive(".membership-peep-wrapper", ".membership-peep-wrapper");
  toggleClassActive(".membership-bubble-1", ".membership-peep-wrapper");
  toggleClassActive(".membership-bubble-2", ".membership-peep-wrapper");
  toggleClassActive(".ribbon", ".membership-options", "top 80%", "64% top");
  toggleClassActive("#membership-title-img-wrapper-2", ".membership-title");
  toggleClassActive("#membership-title-img-wrapper-2-sm", ".membership-title");

  // Questions Section
  toggleClassActive(".questions-cta-1", ".questions-btns");
  toggleClassActive(".questions-cta-2", ".questions-btns");
  toggleClassActive(".questions-peep-wrapper", ".questions-peep-wrapper");
  toggleClassActive(".questions-bubble-1", ".questions-peep-wrapper");
  toggleClassActive(".questions-bubble-2", ".questions-peep-wrapper");
  toggleClassActive(".thought-cloud", ".questions-peep-wrapper");

  // Pre Footer
  toggleClassActive(".pre-footer-title", ".pre-footer-title");
  toggleClassActive(".pre-footer-cta", ".pre-footer-cta");
  toggleClassActive(".pre-footer-img-1-peep-wrapper", ".pre-footer-img-1");
  toggleClassActive(".pre-footer-img-1-bubble-1", ".pre-footer-img-1");
  toggleClassActive(".pre-footer-img-1-bubble-2", ".pre-footer-img-1");
  toggleClassActive(".pre-footer-img-1-bubble-3", ".pre-footer-img-1");
  toggleClassActive(".pre-footer-img-2-peep-wrapper", ".pre-footer-img-2");
  toggleClassActive(".pre-footer-img-2-bubble-1", ".pre-footer-img-2");
  toggleClassActive(".pre-footer-img-2-bubble-2", ".pre-footer-img-2");

  // Description - Function to handle Section Description animation. Used in Perks, Membership, & Questions Section.
  const animateSectionDescription = (selector, trigger, markers) => {
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
          start: "top 92%",
          end: "center 4%",
          markers: markers,
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  };

  animateSectionDescription(".perks-description", ".perks-description");
  animateSectionDescription(
    ".membership-description",
    ".membership-description"
  );
  animateSectionDescription(".questions-description", ".questions-description");
  animateSectionDescription(
    ".pre-footer-description",
    ".pre-footer-description"
  );
};

nonGsapAnimations();

gsapAnimations();
