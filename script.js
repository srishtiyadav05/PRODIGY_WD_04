// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');
function handleScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleScroll);
handleScroll();

// Mobile Menu Toggle
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
