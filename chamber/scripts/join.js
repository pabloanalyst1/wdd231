function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Quit modal when you click on a different part
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.textContent = `Last updated: ${document.lastModified}`;