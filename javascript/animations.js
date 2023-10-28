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
      gsap.to(".selected-work", {
        scrollTrigger: {
          trigger: ".selected-work",
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

  mm.add("(min-width: 768px)", () => {
    // Description - Shifting Title Text "Selected Work"
    gsap.fromTo(
      ".word-selected",
      {
        translateX: "46%",
      },
      {
        translateX: "0",
        ease: "ease",
        scrollTrigger: {
          trigger: ".selected-work",
          scrub: true,
          start: "top 25%",
          end: "+400%",
        },
      }
    );

    // Description - Shifting Title Text "Selected Work"
    gsap.fromTo(
      ".word-work",
      {
        translateX: "64%",
      },
      {
        translateX: "0",
        ease: "ease",
        scrollTrigger: {
          trigger: ".selected-work",
          scrub: true,
          start: "top 25%",
          end: "+400%",
          // markers: true,
        },
      }
    );
  });

  // Description - Letter animations
  const selectedWorkTitleProps = {
    y: 0,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".selected-work",
      start: "top center",
      end: "bottom center",
      toggleActions: "restart none none reverse",
      onEnter: () =>
        document.querySelector(".selected-work-title").classList.add("active"),
    },
  };

  const selectedWorkTitleCharacters = document.querySelectorAll(
    ".selected-work-title-character"
  );

  selectedWorkTitleCharacters.forEach((el, index) => {
    gsap.to(el, {
      ...selectedWorkTitleProps,
      duration: 0.25 + 0.05 * index, // Based on the pattern you provided
      delay: 0.05 * index,
    });
  });
  // Description - Letter animations
};

gsapAnimations();
