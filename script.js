// ============================================================
// PORTFOLIO — SCRIPT
// ============================================================

// Auto-update copyright year in all footers
document.querySelectorAll('.year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// ---- Mobile nav toggle ----
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---- Highlight active nav link based on current page ----
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const linkFile = link.getAttribute('href').split('/').pop();
  if (linkFile === currentPath) link.classList.add('active');
});

// ---- Scroll fade-in for any .fade-in elements ----
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ---- Project filter tabs (projects.html) ----
const filterBtns = document.querySelectorAll('.filter-btn');
const tiles = document.querySelectorAll('.project-tile');

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      tiles.forEach(tile => {
        const show = filter === 'all' || tile.dataset.category === filter;
        tile.style.display = show ? '' : 'none';
      });
    });
  });
}
