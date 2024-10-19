const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');

const messageElement = document.getElementById('visit-message');

if (!lastVisit) {
    messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysBetween = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    
    if (daysBetween < 1) {
        messageElement.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        messageElement.textContent = `You last visited 1 day ago.`;
    } else {
        messageElement.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

localStorage.setItem('lastVisit', now);
