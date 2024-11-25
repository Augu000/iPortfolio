// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Anime.js Animation Example
document.addEventListener('DOMContentLoaded', () => {
  anime({
    targets: '.animate-hero',
    opacity: [0, 1],
    translateY: [-50, 0],
    duration: 2000,
    easing: 'easeOutExpo',
  });
});

// Add scroll listener to resize the header
document.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled'); // Add class to float and shrink header
  } else {
    header.classList.remove('scrolled'); // Remove class when back to top
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".navmenu");

  hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
