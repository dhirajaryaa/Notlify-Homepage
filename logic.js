            // Smooth scrolling for navigation links
            document.addEventListener("DOMContentLoaded", function () {
                const navLinks = document.querySelectorAll('a[href^="#"]');
                navLinks.forEach((link) => {
                    link.addEventListener("click", function (e) {
                        e.preventDefault();
                        const targetId = this.getAttribute("href");
                        if (targetId === "#") return;

                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }
                    });
                });
            });

            // FAQ toggle functionality
            function toggleFAQ(element) {
                const isActive = element.classList.contains("active");

                // Close all FAQ items
                document.querySelectorAll(".faq-item").forEach((item) => {
                    item.classList.remove("active");
                });

                // Open clicked item if it wasn't active
                if (!isActive) {
                    element.classList.add("active");
                }
            }

            // Configuration - Update these URLs as needed
            const FRONTEND_URL = 'https://notlify.in';
            const LOGIN_URL = 'https://app.notlify.in/login';
            const SIGNUP_URL = 'https://app.notlify.in/signup';
            const DEMO_URL = 'https://notlify.in/demo';

            // Handle CTA button clicks
            function handleCTAClick(action) {
                switch(action) {
                    case 'signup':
                        window.open(SIGNUP_URL, '_blank');
                        break;
                    case 'login':
                        window.open(LOGIN_URL, '_blank');
                        break;
                    case 'demo':
                        window.open(DEMO_URL, '_blank');
                        break;
                    case 'app':
                        window.open(FRONTEND_URL, '_blank');
                        break;
                    default:
                        window.open(SIGNUP_URL, '_blank');
                }
            }

            // Mobile menu toggle
            function toggleMobileMenu() {
                const mobileMenu = document.querySelector('.mobile-menu');
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                
                mobileMenu.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            }

            // Add click handlers to all CTA buttons
            document.querySelectorAll('[data-action]').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const action = this.getAttribute('data-action');
                    handleCTAClick(action);
                });
            });

            // Close mobile menu when clicking outside or on links
            document.addEventListener('click', function(e) {
                const mobileMenu = document.querySelector('.mobile-menu');
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                
                if (mobileMenu && mobileMenuBtn && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    mobileMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            });

            // Close mobile menu when clicking on nav links
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.addEventListener('click', function() {
                    const mobileMenu = document.querySelector('.mobile-menu');
                    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                    
                    if (mobileMenu && mobileMenuBtn) {
                        mobileMenu.classList.remove('active');
                        mobileMenuBtn.classList.remove('active');
                    }
                });
            });

            // Intersection Observer for animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            };

            const observer = new IntersectionObserver(function (entries) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            document
                .querySelectorAll(
                    ".highlight-card, .feature-row, .testimonial-card",
                )
                .forEach((el) => {
                    el.style.opacity = "0";
                    el.style.transform = "translateY(20px)";
                    el.style.transition =
                        "opacity 0.6s ease, transform 0.6s ease";
                    observer.observe(el);
                });