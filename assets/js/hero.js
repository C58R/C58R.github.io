// ===== Configuration =====
const CONFIG = {
  particles: {
    count: 23,
    baseRadius: 3.5,
    initialOpacity: 0.4,
    animationMinDuration: 6,
    animationDurationVariation: 3,
    animationDelay: 100,
    leftPosMultiplier: 13,
    leftPosOffset: 10,
    leftPosMod: 90,
    maxLeftPos: 88,
    topPosMultiplier: 17,
    topPosOffset: 20,
    topPosMod: 80,
    animationOpacityMin: 0.2,
    animationOpacityMax: 0.6,
    animationRadiusIncrease: 1,
    animationVerticalShift: 5,
    animationHorizontalShift: 2
  },
  scroll: {
    scrollThreshold: 100,
    quotesPath: '/assets/js/quotes.json'
  }
};

// Initialize all page functionality on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  // ===== Particles Animation =====
  const particlesGroup = document.getElementById('particles');
  if (particlesGroup) {
    const { count, baseRadius, initialOpacity, animationMinDuration, animationDurationVariation, animationDelay } = CONFIG.particles;
    const { leftPosMultiplier, leftPosOffset, leftPosMod, maxLeftPos, topPosMultiplier, topPosOffset, topPosMod } = CONFIG.particles;
    const { animationOpacityMin, animationOpacityMax, animationRadiusIncrease, animationVerticalShift, animationHorizontalShift } = CONFIG.particles;
    
    for (let i = 0; i < count; i++) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      const leftPos = (i * leftPosMultiplier + leftPosOffset) % leftPosMod;
      const topPos = (i * topPosMultiplier + topPosOffset) % topPosMod;
      const cx = Math.min(leftPos, maxLeftPos);
      
      circle.setAttribute('cx', `${cx}%`);
      circle.setAttribute('cy', `${topPos}%`);
      circle.setAttribute('r', `${baseRadius}`);
      circle.setAttribute('fill', 'white');
      circle.setAttribute('opacity', `${initialOpacity}`);
      circle.setAttribute('filter', 'url(#blur1)');
      
      particlesGroup.appendChild(circle);
      
      const duration = (animationMinDuration + (i % animationDurationVariation)) * 1000;
      const delay = i * animationDelay;
      
      setTimeout(() => {
        circle.animate([
          { opacity: animationOpacityMin, r: baseRadius, cy: `${topPos}%`, cx: `${cx}%` },
          { opacity: animationOpacityMax, r: baseRadius + animationRadiusIncrease, cy: `${topPos - animationVerticalShift}%`, cx: `${Math.min(leftPos + animationHorizontalShift, 90)}%` },
          { opacity: animationOpacityMin, r: baseRadius, cy: `${topPos}%`, cx: `${cx}%` }
        ], {
          duration: duration,
          iterations: Infinity,
          easing: 'ease-in-out'
        });
      }, delay);
    }
  }

  // ===== Random Quote Selection =====
  const quoteElement = document.getElementById('randomQuote');
  const authorElement = document.getElementById('quoteAuthor');
  if (quoteElement && authorElement) {
    fetch(CONFIG.scroll.quotesPath)
      .then(response => response.json())
      .then(quotes => {
        if (!Array.isArray(quotes) || quotes.length === 0) return;

        // Avoid showing the same quote twice in a row
        let lastIndex = -1;
        try {
          const stored = sessionStorage.getItem('lastQuoteIndex');
          if (stored !== null) lastIndex = parseInt(stored, 10);
        } catch (_) {
          // sessionStorage may be blocked; ignore and proceed
        }

        let randomIndex = 0;
        if (quotes.length === 1) {
          randomIndex = 0;
        } else {
          do {
            randomIndex = Math.floor(Math.random() * quotes.length);
          } while (randomIndex === lastIndex);
        }

        quoteElement.textContent = '"' + quotes[randomIndex].text + '"';
        authorElement.textContent = '— ' + quotes[randomIndex].author;

        try {
          sessionStorage.setItem('lastQuoteIndex', String(randomIndex));
        } catch (_) {
          // Ignore if storage is unavailable
        }
      })
      .catch(error => console.warn('Could not load quotes:', error));
  }

  // ===== Header Scroll Listener =====
  const header = document.querySelector('.page-header');
  const hero = document.querySelector('.hero-section');
  if (header && hero) {
    let ticking = false;
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const heroBottom = hero.offsetHeight;
          const scrollPosition = window.scrollY;
          
          if (scrollPosition > heroBottom - CONFIG.scroll.scrollThreshold) {
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

  // ===== Mobile Nav Toggle =====
  const toggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (toggle && navMenu) {
    const setState = (open) => {
      toggle.classList.toggle('open', open);
      navMenu.classList.toggle('mobile-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    toggle.addEventListener('click', function() {
      setState(!toggle.classList.contains('open'));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setState(false));
    });
  }
});