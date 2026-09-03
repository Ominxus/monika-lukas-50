document.addEventListener('DOMContentLoaded', () => {
  const petals = [...document.querySelectorAll('.petals span')];
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    petals.forEach((petal, i) => {
      petal.style.transform = `translateY(${y * (0.02 + i * 0.004)}px) rotate(${i % 2 ? 8 : -8}deg)`;
    });
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});