// Menú responsive
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Modo oscuro / claro
const modoToggle = document.getElementById('modo-toggle');
modoToggle.addEventListener('click', () => {
  document.body.classList.toggle('claro');
  modoToggle.textContent = document.body.classList.contains('claro') ? '☀️' : '🌙';
});
