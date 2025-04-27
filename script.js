// Modo oscuro / claro
const modoToggle = document.getElementById('modo-toggle');
modoToggle.addEventListener('click', () => {
  document.body.classList.toggle('claro');
  modoToggle.textContent = document.body.classList.contains('claro') ? '☀️' : '🌙';
});
