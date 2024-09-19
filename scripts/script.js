const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

const allButton = document.getElementById('all');
const cseButton = document.getElementById('cse');
const wddButton = document.getElementById('wdd');

const allCourses = document.querySelectorAll('.course-item');

allButton.addEventListener('click', () => {
    allCourses.forEach(course => {
        course.style.display = 'block'; // Mostrar todos
    });
});

cseButton.addEventListener('click', () => {
    allCourses.forEach(course => {
        if (course.classList.contains('cse')) {
            course.style.display = 'block'; // Mostrar CSE
        } else {
            course.style.display = 'none'; // Ocultar otros
        }
    });
});

wddButton.addEventListener('click', () => {
    allCourses.forEach(course => {
        if (course.classList.contains('wdd')) {
            course.style.display = 'block'; // Mostrar WDD
        } else {
            course.style.display = 'none'; // Ocultar otros
        }
    });
});
