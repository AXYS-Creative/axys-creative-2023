const menuBtn = document.querySelector(".menu-btn");

export const toggleNav = () => {
  const mainContent = document.querySelector(".main-content");
  const navMenu = document.querySelector(".nav-menu");

  mainContent.classList.toggle("active");
  navMenu.classList.toggle("active");
  menuBtn.classList.toggle("active");
};

menuBtn.addEventListener("click", toggleNav);
