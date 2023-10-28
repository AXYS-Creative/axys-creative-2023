export const gsapAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".selected-work", {
    scrollTrigger: {
      trigger: ".selected-work",
      start: "top 25%",
      end: "+1200%",
      pin: true,
      // markers: true,
    },
  });

  // let dynamicWidth = window.innerWidth > 1440 ? "46%" : "20%";

  //
  // Media Queries in JavsScript
  //

  // $max-breakpoints: (
  //     'xs': 320px,
  //     'sm': 480px,
  //     'md': 768px,
  //     'lg': 1024px,
  //     'xl': 1200px,
  //     'xxl': 1440px,
  //     'xxxl': 1920px
  //   );

  let mediaXXLG = window.matchMedia("(max-width: 1440px)");
  let mediaXLG = window.matchMedia("(max-width: 1220px)");
  let mediaLG = window.matchMedia("(max-width: 1024px)");
  let mediaMD = window.matchMedia("(max-width: 768px)");

  let dynamicWidth;

  if (mediaLG.matches) {
    dynamicWidth = "40%";
    // console.log("Narrow viewport");
  } else {
    dynamicWidth = "46%";
    // console.log("Wide viewport");
  }

  mediaLG.addEventListener("change", (event) => {
    if (event.matches) {
      // console.log("Changed to narrow viewport");
      dynamicWidth = "40%";
    } else {
      // console.log("Changed to wide viewport");
      dynamicWidth = "46%";
    }
  });

  gsap.fromTo(
    ".word-selected",
    {
      translateX: dynamicWidth,
    },
    {
      translateX: "0",
      ease: "ease",
      scrollTrigger: {
        trigger: ".selected-work",
        scrub: true,
        start: "top 25%",
        end: "+400%",
        //   markers: true,
      },
    }
  );

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

  const commonProps = {
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

  // Assuming the elements share the same class
  const elements = document.querySelectorAll(".selected-work-title-character");

  elements.forEach((el, index) => {
    gsap.to(el, {
      ...commonProps,
      duration: 0.25 + 0.05 * index, // Based on the pattern you provided
      delay: 0.05 * index,
    });
  });
};

gsapAnimations();
