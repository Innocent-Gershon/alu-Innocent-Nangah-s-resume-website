// Toggle navbar on mobile devices
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Handle navigation links
const navigationLinks = document.querySelectorAll('.nav-links a');
const contentSections = document.querySelectorAll('.section');

navigationLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    toggleActiveSection(index);
    navLinks.classList.remove('show');
    scrollToTop();
  });
});

// Toggle active section
function toggleActiveSection(index) {
  contentSections.forEach((section, i) => {
    if (i === index) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Modal functionality
const downloadBtn = document.getElementById('download-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementsByClassName('close-modal')[0];

downloadBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide) => {
        slide.style.opacity = 0; // Hide all slides
    });
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to the first slide
    
    slides[slideIndex - 1].style.opacity = 1; // Show the current slide
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Handle form submission
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  popup.style.display = 'flex'; // Show the popup
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the popup
});