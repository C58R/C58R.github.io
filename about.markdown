---
layout: default
title: About Me
permalink: /about/
---
<section class="about-hero scroll-reveal">
	<h2 class="About-title scroll-reveal">About Me</h2>
	<p class="scroll-reveal">
		Marine Security Guard who led detachments protecting U.S. diplomats and classified materials across Liberia, Taiwan, and the Czech Republic. I lean on trust, communication, and adaptability to keep teams aligned in high-stakes environments. That same problem-solving mindset now drives my transition into software engineering.
	</p>
</section>
<section class="about-grid scroll-reveal">
	<div class="about-photo">
		<img src="/assets/images/oscar.jpg" alt="Photo of Oscar Callejas" class="profile-photo" draggable="false">
	</div>
	<div class="about-content">
		<h3>What I bring</h3>
		<p>
			As Assistant Detachment Commander—and often Acting Commander—I led six Marines without an on-site supervisor, coordinating directly with embassy leadership to keep diplomats and classified materials secure. That required quick, informed decisions and clear communication across ranks and cultures.
		</p>
		<p>
			Living and working in Liberia, Taiwan, and the Czech Republic reshaped how I lead: I adapt quickly to new systems, communicate clearly across cultures, and stay effective when the environment is unfamiliar or high-pressure.
		</p>
		<ul class="about-list">
			<li><strong>Leadership:</strong> Directed a six-person team in high-stakes environments, coordinating with embassy leadership and driving project decisions.</li>
			<li><strong>Operations:</strong> Managed security operations across three international posts with zero incidents, ensuring disciplined execution and reliable delivery.</li>
			<li><strong>Problem-Solving:</strong> Adapted quickly to new protocols and cultures, resolving challenges efficiently and learning complex systems rapidly.</li>
			<li><strong>Results-Driven:</strong> Optimized processes under pressure to protect personnel and information, focusing on scalable, maintainable solutions.</li>
		</ul>
	</div>
</section>
<section class="photo-gallery scroll-reveal">
	<h3 class="gallery-title">Beyond the Resume</h3>
	<div class="gallery-container">
		<div class="gallery-track">
			<button class="arrow left" aria-label="Previous image">&#10094;</button>
			<div class="slide active">
				<img src="/assets/images/6.jpg" alt="Professional headshot" draggable="false">
				<p>Professional headshot</p>
			</div>
			<div class="slide">
				<img src="/assets/images/6.jpg" alt="Marine service overseas" draggable="false">
				<p>Marine service overseas</p>
			</div>
			<div class="slide">
				<img src="/assets/images/6.jpg" alt="Global experience" draggable="false">
				<p>Global experience & adaptability</p>
			</div>
			<button class="arrow right" aria-label="Next image">&#10095;</button>
		</div>
	</div>
</section>
<section class="cta-section scroll-reveal">
	<h2>Let’s Connect</h2>
	<p>Want to collaborate or learn more?</p>
	<div class="cta-buttons">
		<a href="/projects" class="btn btn-primary">View Projects</a>
		<a href="mailto:callejasoc1@gmail.com" class="btn btn-secondary">Get in Touch</a>
	</div>
</section>
<script>
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.arrow.left');
  const nextBtn = document.querySelector('.arrow.right');
  let currentIndex = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });
</script>