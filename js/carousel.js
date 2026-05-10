let slideIndex = 0;

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.carousel-slide');
  if (!slides.length) return;
  
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
}


setInterval(() => {
  moveSlide(1);
}, 5000);
