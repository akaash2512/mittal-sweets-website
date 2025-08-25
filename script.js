document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const menuButton = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.site-header nav');
    const menuLinks = document.querySelectorAll('.site-header nav a');

    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Go to top button functionality
    const toTopBtn = document.getElementById('to-top-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            toTopBtn.classList.add('show-btn');
        } else {
            toTopBtn.classList.remove('show-btn');
        }
    });

    toTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});