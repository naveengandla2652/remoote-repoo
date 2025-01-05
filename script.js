// Smooth Scroll to Sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
    });
}

// Contact form submission handling (for demonstration purposes)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});

