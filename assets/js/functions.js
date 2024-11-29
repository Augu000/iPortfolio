const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  const icon = themeToggle.querySelector('i');

  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode'); // Add light mode
    icon.classList.remove('bi-moon');
    icon.classList.add('bi-sun');
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode'); // Add dark mode
    icon.classList.remove('bi-sun');
    icon.classList.add('bi-moon');
  }
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
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.navmenu');

  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});
