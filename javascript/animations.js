gsap.registerPlugin(ScrollTrigger);

let backgroundTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#mainContent",
    scrub: 1,
    start: "10% 40%",
    // end: window.innerWidth > 480 ? "100% 60%" : "76% 60%", // WITH SOLAR REP CARDS
    end: window.innerWidth > 480 ? "76% 60%" : "52% 60%",
    // markers: true,
  },
});
backgroundTL
  .to("#mainContent", {
    backgroundColor: "#C6D3D8",
  })
  .to("#mainContent", {
    backgroundColor: "#000014",
  })
  .to("#mainContent", {
    backgroundColor: "#000014",
  });
