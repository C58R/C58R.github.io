// Create and animate floating particles
document.addEventListener('DOMContentLoaded', function() {
  const particlesGroup = document.getElementById('particles');
  
  if (!particlesGroup) return;
  
  // Create -20- particles
  for (let i = 0; i < 20; i++) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const leftPos = (i * 13 + 10) % 90;
    const topPos = (i * 17 + 20) % 80;
    
    circle.setAttribute('cx', `${leftPos}%`);
    circle.setAttribute('cy', `${topPos}%`);
    circle.setAttribute('r', '4');
    circle.setAttribute('fill', 'white');
    circle.setAttribute('opacity', '0.4');
    circle.setAttribute('filter', 'url(#blur1)');
    
    particlesGroup.appendChild(circle);
    
    // Animate each particle
    const duration = (6 + (i % 3)) * 1000;
    const delay = i * 100;
    
    setTimeout(() => {
      circle.animate([
        { opacity: 0.2, r: 4, cy: `${topPos}%`, cx: `${leftPos}%` },
        { opacity: 0.6, r: 7, cy: `${topPos - 5}%`, cx: `${leftPos + 2}%` },
        { opacity: 0.2, r: 4, cy: `${topPos}%`, cx: `${leftPos}%` }
      ], {
        duration: duration,
        iterations: Infinity,
        easing: 'ease-in-out'
      });
    }, delay);
  }
});

// Random quote rotation with authors name
document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
    { text: "The future belongs to those who learn more skills and combine them in creative ways.", author: "Robert Greene" },
    { text: "Excellence is not a skill, it's an attitude.", author: "Ralph Marston" },
    { text: "Build. Learn. Iterate.", author: "Unknown" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" }
  ];
  
  const quoteElement = document.getElementById('randomQuote');
  const authorElement = document.getElementById('quoteAuthor');
  
  if (quoteElement && authorElement) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = '"' + quotes[randomIndex].text + '"';
    authorElement.textContent = '— ' + quotes[randomIndex].author;
  }
});

// Header transparency on scroll
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.page-header');
  const hero = document.querySelector('.hero-section');
  
  if (!header || !hero) return;
  
  let ticking = false;
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const heroBottom = hero.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > heroBottom - 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
});