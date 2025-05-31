// =======================
// Mobile Navigation Toggle
// =======================
const burger        = document.querySelector('.burger');
const navLinks      = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

function toggleNav() {
  // Toggle menu visibility
  navLinks.classList.toggle('active');

  // Animate burger icon
  burger.classList.toggle('toggle');

  // Ensure no lingering inline display:none
  navLinks.style.removeProperty('display');
}

burger.addEventListener('click', toggleNav);

// Close mobile menu when any nav link is clicked
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      toggleNav();
    }
  });
});

// Reset mobile nav on window resize above breakpoint
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.style.removeProperty('display');
    navLinks.classList.remove('active');
    burger.classList.remove('toggle');
  }
});


// =======================
// Smooth Scrolling for Anchor Links
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    // Close mobile menu if open
    if (navLinks.classList.contains('active')) {
      toggleNav();
    }

    // Scroll to target
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// =======================
// Nav Links Fade‐In Animation
// =======================
function navAnimation() {
  navLinksItems.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
  });
}
window.addEventListener('load', navAnimation);


// =======================
// Set Current Year in Footer
// =======================
// Make sure your footer has: <span id="current-year"></span>
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
