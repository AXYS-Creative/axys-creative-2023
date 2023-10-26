const menuBtn = document.querySelector(".menu-btn");

const toggleNav = () => {
  const mainContent = document.querySelector(".main-content");

  mainContent.classList.toggle("active");
};

menuBtn.addEventListener("click", toggleNav);

gsap.registerPlugin(ScrollTrigger);

gsap.to(".selected-work", {
  scrollTrigger: {
    trigger: ".selected-work",
    start: "top 25%",
    end: "+400%",
    pin: true,
    // markers: true,
  },
});

gsap.to(".selected-work-title", {
  translate: "-120%",
  ease: "ease",
  scrollTrigger: {
    trigger: ".selected-work",
    scrub: true,
    start: "top 25%",
    end: "+400%",
    // markers: true,
  },
});
