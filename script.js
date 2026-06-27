// ── Floating Bubbles ──
const container = document.getElementById('bubbles');
function makeBubble() {
  const b = document.createElement('div');
  b.className = 'bubble';
  const size = Math.random() * 60 + 20;
  b.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random()*100}%;
    animation-duration:${Math.random()*12+8}s;
    animation-delay:${Math.random()*8}s;
  `;
  container.appendChild(b);
  setTimeout(() => b.remove(), 25000);
}
for (let i = 0; i < 14; i++) makeBubble();
setInterval(makeBubble, 2200);

// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service-card, .why-card, .value-card, .stat-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});

// ── Smooth active nav link ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--sky-deep)' : '';
  });
});
