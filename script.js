// Dark Mode Toggle

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Set dark mode ON by default
body.classList.add('dark-mode');

// Toggle on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});



// Scroll-to-Top
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
  }
});
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(section => {
observer.observe(section);
});