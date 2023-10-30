const menuBtn = document.querySelector(".menu-btn");

export const toggleNav = () => {
  menuBtn.classList.toggle("active");

  const mainContent = document.querySelector(".main-content");
  const navMenu = document.querySelector(".nav-menu");
  const links = navMenu.querySelectorAll("a");

  mainContent.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Toggle menu visibility
  let expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", !expanded);
  navMenu.setAttribute("aria-hidden", expanded);

  // Update tabIndex for links based on menu visibility
  links.forEach((link) => {
    link.setAttribute("tabindex", expanded ? "-1" : "0");
  });
};

menuBtn.addEventListener("click", toggleNav);
