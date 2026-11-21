// Main JavaScript for Soko Academie Football Template & Slider Activation
document.addEventListener('DOMContentLoaded', () => {
    console.log("SOKO Académie Football template initialized successfully.");

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero Slider Activation & Functionality
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    const slideIntervalTime = 6000; // 6 seconds per slide

    function showSlide(index) {
        if (slides.length === 0) return;
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (dots[i]) dots[i].classList.remove('active');
        });
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Automatic slide rotation
    if (slides.length > 0) {
        let slideTimer = setInterval(nextSlide, slideIntervalTime);

        // Pause on hover
        const sliderSection = document.querySelector('.hero-slider-section');
        if (sliderSection) {
            sliderSection.addEventListener('mouseenter', () => clearInterval(slideTimer));
            sliderSection.addEventListener('mouseleave', () => {
                slideTimer = setInterval(nextSlide, slideIntervalTime);
            });
        }
    }

    // Registration Form Submission Handling
    const regForm = document.getElementById('registrationForm');
    const successMsg = document.getElementById('formSuccessMessage');

    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            regForm.style.opacity = '0.5';
            setTimeout(() => {
                regForm.reset();
                regForm.style.opacity = '1';
                successMsg.style.display = 'flex';
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 600);
        });
    }

    // Contact Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    const contactSuccessMsg = document.getElementById('contactSuccessMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactForm.style.opacity = '0.5';
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.opacity = '1';
                contactSuccessMsg.style.display = 'flex';
                contactSuccessMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 600);
        });
    }
});
