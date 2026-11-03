document.addEventListener('DOMContentLoaded', () => {
    
    // FEATURE 1: Mobile Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    
    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
            });
        });
    }

    // FEATURE 2: Active Navigation Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // FEATURE 3: Contact Form Client-Side Validation & Feedback Simulation
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name').value.trim();
            const emailInput = document.getElementById('email').value.trim();
            const messageInput = document.getElementById('message').value.trim();

            if (nameInput === '' || emailInput === '' || messageInput === '') {
                showFeedback('⚠️ Please fill out all transmission fields.', 'var(--neon-pink)');
                return;
            }

            // Simulate successful transmission feedback
            showFeedback('Transmission successful! Message received.', 'var(--neon-green)');
            contactForm.reset();
        });
    }

    function showFeedback(text, color) {
        if (!formFeedback) return;
        formFeedback.textContent = text;
        formFeedback.style.color = color;
        formFeedback.classList.remove('hidden');

        setTimeout(() => {
            formFeedback.classList.add('hidden');
        }, 5000);
    }

    // FEATURE 4: Scroll-Triggered Fade-In Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .about-grid, .contact-wrapper').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // FEATURE 5: Back-to-Top Button Functionality
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});