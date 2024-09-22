document.addEventListener("DOMContentLoaded", function() {

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const headerNav = document.querySelector('.header-nav');

    // Clicking
    hamburgerMenu.addEventListener('click', function() {
        headerNav.classList.toggle('active'); // Hide
    });

    // Get year
    const yearSpan = document.getElementById("currentyear");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Last modified by me
    const lastModifiedSpan = document.getElementById("lastModified");
    lastModifiedSpan.textContent = `Last Update: ${document.lastModified}`;

    // Filter / sort by (CSE, WDD, ALL)
    const allButton = document.getElementById('all');
    const cseButton = document.getElementById('cse');
    const wddButton = document.getElementById('wdd');
    const courseItems = document.querySelectorAll('.course-item');

    // Show all courses
    allButton.addEventListener('click', () => {
        courseItems.forEach(item => item.style.display = 'block');
    });

    // Show CSE courses only
    cseButton.addEventListener('click', () => {
        courseItems.forEach(item => {
            if (item.classList.contains('cse')) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Show WDD courses only
    wddButton.addEventListener('click', () => {
        courseItems.forEach(item => {
            if (item.classList.contains('wdd')) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
