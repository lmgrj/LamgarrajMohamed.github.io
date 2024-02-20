// Add JavaScript animations or interactions here

// Example: Animate the navigation links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach((link, index) => {
  link.style.animation = `fadeInUp 0.5s ease forwards ${index / 7 + 0.3}s`;
});
