document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.position = 'sticky';
      header.style.top = '0';
      header.style.zIndex = '1000';
      header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    } else {
      header.style.position = 'relative';
      header.style.boxShadow = 'none';
    }
  });


  const currentLocation = window.location.href;
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    if(currentLocation.includes(link.getAttribute('href'))) {
      link.style.color = 'var(--color-electric-yellow)';
      link.style.borderBottom = '2px solid var(--color-electric-yellow)';
      link.style.paddingBottom = '5px';
    }
  });
});
