// Scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    // Batch DOM reads to reduce forced reflows
    const elementPositions = Array.from(revealElements).map(element => ({
      element,
      top: element.getBoundingClientRect().top
    }));

    // Then batch DOM writes
    elementPositions.forEach(({ element, top }) => {
      if (top < windowHeight - revealPoint) {
        element.classList.add('visible');
      }
    });
  };

  // Throttle function to limit how often revealOnScroll runs
  let throttleTimer = false;
  const throttle = (callback, time) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
      callback();
      throttleTimer = false;
    }, time);
  };

  // Initial check
  revealOnScroll();

  // Check on scroll with throttling (runs max once every 100ms)
  window.addEventListener('scroll', () => {
    throttle(revealOnScroll, 100);
  });
});
