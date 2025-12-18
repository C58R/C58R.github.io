document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.page-header');
  const hero = document.querySelector('.hero-section');
  
  // Scroll listener only on pages with hero
  if (header && hero) {
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const heroBottom = hero.offsetHeight;
          const scrollPosition = window.scrollY;
          
          if (scrollPosition > heroBottom) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ===== Nav Active State (only after first click) =====
  const updateActiveNav = () => {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
      const dataUrl = link.getAttribute('data-url');
      
      // Check if current path matches the data-url
      if (currentPath === dataUrl || currentPath === dataUrl.replace(/\/$/, '')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  // Check if user has clicked nav before
  let navClicked = false;
  try {
    navClicked = sessionStorage.getItem('navClicked') === 'true';
  } catch (_) {
    // Ignore if storage unavailable
  }

  // Apply active state only if user has clicked nav before
  if (navClicked) {
    updateActiveNav();
  }

  // Listen for nav clicks to enable active state
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      try {
        sessionStorage.setItem('navClicked', 'true');
      } catch (_) {
        // Ignore if storage unavailable
      }
      setTimeout(updateActiveNav, 100);
    });
  });
});