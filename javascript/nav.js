const mainContent = document.querySelector(".main-content");
const navMenu = document.querySelector(".nav-menu");

const menuBtn = document.querySelector(".menu-btn");
const sectionLinks = document.querySelectorAll(".section-link");

export const toggleNav = () => {
  menuBtn.classList.toggle("active");
  const navLinks = navMenu.querySelectorAll("a");
  const pageLinks = document.querySelectorAll(".page-link");

  mainContent.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Toggle menu visibility
  let expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", !expanded);
  navMenu.setAttribute("aria-hidden", expanded);

  // Update tabIndex for navLinks based on menu visibility
  navLinks.forEach((link) => {
    link.setAttribute("tabindex", expanded ? "-1" : "0");
  });

  pageLinks.forEach((link) => {
    link.setAttribute("tabindex", !expanded ? "-1" : "0");
  });
};

export const closeNav = () => {
  mainContent.classList.remove("active");
  navMenu.classList.remove("active");
  menuBtn.classList.remove("active");
};

sectionLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

menuBtn.addEventListener("click", toggleNav);

// Page scroll tweaking

// Add click event listeners to these links
for (let link of sectionLinks) {
  link.addEventListener("click", function (event) {
    // Prevent the default jump-to-section behavior
    event.preventDefault();

    // Get the target section's top offset
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;

    // Smoothly scroll to the target section using gsap
    gsap.to(window, {
      duration: 0.6,
      delay: 0.8,
      scrollTo: { y: targetPosition, autoKill: false },
      ease: "power2.inOut",
    });
  });
}

// Hide menu button when reaching the bottom of the page

window.addEventListener("scroll", function () {
  const scrolledFromTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - 128;
  const viewHeight = window.innerHeight;

  if (scrolledFromTop + viewHeight >= scrollHeight) {
    menuBtn.classList.add("hide-menu-btn");
  } else {
    menuBtn.classList.remove("hide-menu-btn");
  }
});
