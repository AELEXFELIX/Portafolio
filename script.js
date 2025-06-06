document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic text for "I Am Developer"
    const developerText = document.getElementById('developer-text');
    const texts = ["Alexander Falcon","Alexander Falcon" , ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            developerText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            developerText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        const typingSpeed = isDeleting ? 50 : 150;
        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect(); // Start the typing animation

    // Simple alert for "Download CV" and "Contact Me" buttons
    document.querySelector('.download-cv').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Download CV functionality is not implemented in this demo.');
    });

    document.querySelector('.contact-me').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Contact Me functionality is not implemented in this demo.');
    });
});