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

// Fade-in animation for 'About' and 'Contact' sections when scrolling into view
function fadeInSections() {
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');
  
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function addFadeInClassOnScroll() {
      if (isElementInViewport(aboutSection)) {
        aboutSection.classList.add('fade-in');
        window.removeEventListener('scroll', addFadeInClassOnScroll);
      }
  
      if (isElementInViewport(contactSection)) {
        contactSection.classList.add('fade-in');
        window.removeEventListener('scroll', addFadeInClassOnScroll);
      }
    }
  
    window.addEventListener('scroll', addFadeInClassOnScroll);
  }
  
  // Call the functions once the DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    animateCTAButton();
    smoothScrollToSection();
    fadeInSections();
  });
  