const mainContent = document.querySelector(".main-content");
const navMenu = document.querySelector(".nav-menu");

const menuBtnWrapper = document.querySelector(".menu-btn-wrapper");
const menuBtn = document.querySelector(".menu-btn");
const menuNavlinks = document.querySelectorAll(".menu-nav-link");
const pageNavLinks = document.querySelectorAll(".page-nav-link");

const toggleNav = () => {
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

const closeNav = () => {
  mainContent.classList.remove("active");
  navMenu.classList.remove("active");
  menuBtn.classList.remove("active");
};

menuNavlinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

menuBtn.addEventListener("click", toggleNav);

// Page scroll behavior (tweak with gsap)
function smoothScrollTo(targetId, delay = 0) {
  // console.log(targetId);
  const targetElement = document.querySelector(targetId);
  let targetSection =
    targetElement.getBoundingClientRect().top + window.scrollY - 40;

  // Adjust scroll-margin-top (offset) depending on the section. In this case we adjust it for the work section.
  if (targetId === "#work") {
    targetSection =
      targetElement.getBoundingClientRect().top + window.scrollY - 300;
  }

  // Using GSAP for smooth scrolling
  gsap.to(window, {
    duration: 2,
    delay: delay,
    scrollTo: { y: targetSection, autoKill: false },
    // ease: "back.inOut(1)",
    ease: "power4.inOut",
  });
}

// Event handler for both menu and page nav links
function triggerPageScroll(links, delay) {
  for (const link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      smoothScrollTo(targetId, delay);
    });
  }
}

triggerPageScroll(menuNavlinks, 0.6); // Delay for menu nav links
triggerPageScroll(pageNavLinks); // No delay for page nav links

// Hide menu button when reaching the bottom of the page
window.addEventListener("scroll", function () {
  const scrolledFromTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - 96;
  const viewHeight = window.innerHeight;

  if (scrolledFromTop + viewHeight >= scrollHeight) {
    menuBtn.classList.add("hide-menu-btn");
    menuBtnWrapper.classList.add("hide-menu-btn-wrapper");
  } else {
    menuBtn.classList.remove("hide-menu-btn");
    menuBtnWrapper.classList.remove("hide-menu-btn-wrapper");
  }
});

// Adjusting the window position on tab
let queryGrab = (element) => document.querySelector(element);
let mqMaxXxl = window.matchMedia("(max-width: 1440px)");
let mqMaxMd = window.matchMedia("(max-width: 768px)");

const tabElements = [
  {
    element: queryGrab(".hero-cta-1"),
    target: queryGrab(".hero-btns"),
    offset: mqMaxMd.matches ? 12 : mqMaxXxl.matches ? 56 : 80,
  },
  {
    element: queryGrab(".hero-cta-2"),
    target: queryGrab(".hero-btns"),
    offset: mqMaxMd.matches ? 12 : mqMaxXxl.matches ? 56 : 80,
  },
  {
    element: queryGrab(".perks-cta-1"),
    target: queryGrab(".perks-btns"),
    offset: mqMaxMd.matches ? 42 : mqMaxXxl.matches ? 68 : 80,
  },
  {
    element: queryGrab(".perks-cta-2"),
    target: queryGrab(".perks-btns"),
    offset: mqMaxMd.matches ? 42 : mqMaxXxl.matches ? 68 : 80,
  },
  {
    element: queryGrab(".membership-first-link"),
    target: queryGrab(".membership-options"),
    offset: mqMaxMd.matches ? -400 : mqMaxXxl.matches ? 48 : 100,
  },
  {
    element: queryGrab(".membership-last-link"),
    target: queryGrab(".membership-options"),
    offset: mqMaxMd.matches ? 64 : mqMaxXxl.matches ? 48 : 100,
  },
  {
    element: queryGrab(".questions-first-link"),
    target: queryGrab(".questions-list"),
    offset: mqMaxMd.matches ? 24 : mqMaxXxl.matches ? -24 : 80,
  },
  {
    element: queryGrab(".questions-cta-1"),
    target: queryGrab(".questions-btns"),
    offset: mqMaxMd.matches ? 64 : mqMaxXxl.matches ? 96 : 210,
  },
  {
    element: queryGrab(".questions-cta-2"),
    target: queryGrab(".questions-btns"),
    offset: mqMaxMd.matches ? 64 : mqMaxXxl.matches ? 96 : 210,
  },
];

tabElements.forEach((item) => {
  item.element.addEventListener("focus", () =>
    sectionTabbing(item.target, item.offset)
  );
});

function sectionTabbing(triggerElement, offset) {
  const elementPosition =
    triggerElement.getBoundingClientRect().top + window.pageYOffset;
  const viewportHeight = window.innerHeight;
  const desiredPosition =
    elementPosition - viewportHeight + triggerElement.offsetHeight + offset;

  window.scrollTo({ top: desiredPosition, behavior: "smooth" });
}
