document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.imagecarousel');
  if (!carousel) return;

  let isDown = false;
  let startX = 0;
  let startScrollLeft = 0;

  // Custom cursor setup
  const customCursor = document.createElement('div');
  customCursor.id = 'custom-cursor';
  customCursor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="#5a67d8"><path d="M7.182 9.172L5.768 7.757L1.525 12l4.243 4.243l1.414-1.415L4.353 12zm9.636 5.656l1.414 1.415L22.475 12l-4.243-4.243l-1.414 1.415L19.646 12z"/><path fill-rule="evenodd" d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"/></g></svg>`;
  document.body.appendChild(customCursor);

    let mouseX = 0;
    let mouseY = 0;

  carousel.addEventListener('mouseenter', () => {
    customCursor.style.display = 'block';
    carousel.style.cursor = 'none';
  });

  carousel.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none';
    carousel.style.cursor = 'auto';
  });

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    customCursor.style.left = (mouseX - 16) + 'px';
    customCursor.style.top = (mouseY - 16) + 'px';
  });

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.clientX;
    startScrollLeft = carousel.scrollLeft;
    carousel.classList.add('dragging');
    customCursor.classList.add('active');
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    carousel.scrollLeft = startScrollLeft - dx;
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('dragging');
    customCursor.classList.remove('active');
  });

  carousel.addEventListener('mouseleave', () => {
    if (isDown) {
      isDown = false;
      carousel.classList.remove('dragging');
      customCursor.classList.remove('active');
    }
  });

  // Touch events for mobile
  carousel.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].clientX;
    startScrollLeft = carousel.scrollLeft;
    carousel.classList.add('dragging');
  });

  carousel.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const dx = e.touches[0].clientX - startX;
    carousel.scrollLeft = startScrollLeft - dx;
  });

  carousel.addEventListener('touchend', () => {
    isDown = false;
    carousel.classList.remove('dragging');
  });

  // Prevent text selection while dragging
  carousel.addEventListener('selectstart', (e) => {
    if (isDown) e.preventDefault();
  });
});
