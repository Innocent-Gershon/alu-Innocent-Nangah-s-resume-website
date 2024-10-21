// Toggle navbar on mobile devices
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Handle navigation links
const navigationLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.section');

// Function to show the selected section
function showSection(index) {
    contentSections.forEach((section, i) => {
        section.classList.remove('active'); // Hide all sections
        if (i === index) {
            section.classList.add('active'); // Show selected section
        }
    });
}

// Event listeners for navigation links
navigationLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(index); // Show the corresponding section
        navLinks.classList.remove('nav-active'); // Close mobile menu
        scrollToTop(); // Scroll to the top of the page
    });
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Handle form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    alert('Your message has been sent!'); // Show confirmation
    contactForm.reset(); // Reset form after submission
});

// Show the first section by default on page load
showSection(0);

// Slideshow function
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slideshow-item img');
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Hide all slides
    });
    slideIndex++; // Increment slide index
    if (slideIndex > slides.length) { slideIndex = 1 } // Loop back to the first image
    slides[slideIndex - 1].classList.add('active'); // Show the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides(); // Start the slideshow



document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Show popup
    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Close popup on button click
    document.getElementById('closePopup').addEventListener('click', function () {
        popup.style.animation = 'fadeOut 0.5s ease'; // Fade-out animation
        setTimeout(() => {
            popup.style.display = 'none'; // Hide the popup after fade-out
        }, 500);
    });
});
