document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.page-header');
  const hero = document.querySelector('.hero-section');
  
  if (!header || !hero) return;
  
  window.addEventListener('scroll', function() {
    const heroBottom = hero.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > heroBottom) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});