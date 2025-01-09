document.addEventListener("DOMContentLoaded", () => {
    console.log("PreMedicalGyan is ready!");

    // Handle scroll behavior for the logo opacity
    window.addEventListener('scroll', function() {
        const logo = document.querySelector('.logo');
        
        if (window.scrollY > 50) {
            logo.style.opacity = '0.5';  // Make the logo semi-transparent on scroll
        } else {
            logo.style.opacity = '1';  // Fully visible logo when at the top
        }
    });

    // Menu toggle for the hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
    
    hamburger.addEventListener('click', () => {
        // Toggle the active class on both the hamburger and the sidebar menu
        sideMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});