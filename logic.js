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