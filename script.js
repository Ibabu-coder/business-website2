document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navbar links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form submission handling
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        this.reset();
    });
});
