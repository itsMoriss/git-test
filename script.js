// Simple animation for the call-to-action button
function animateCTAButton() {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', () => {
      ctaButton.style.transform = 'scale(1.1)';
    });
    ctaButton.addEventListener('mouseout', () => {
      ctaButton.style.transform = 'scale(1)';
    });
  }
  
  // Smooth scroll to section when clicking on navigation links
  function smoothScrollToSection() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSectionId = link.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);
        const offsetTop = targetSection.getBoundingClientRect().top;
        window.scrollBy({
          top: offsetTop,
          left: 0,
          behavior: 'smooth'
        });
      });
    });
  }
  
  // Call the functions once the DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    animateCTAButton();
    smoothScrollToSection();
  });
  