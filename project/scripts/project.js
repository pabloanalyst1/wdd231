// Hamb menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    const toggle = document.querySelector('.menu-toggle');
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}

// Motivational 
document.addEventListener("DOMContentLoaded", () => {
    const quoteButton = document.getElementById("quote-button");
    const quoteDisplay = document.getElementById("quote");

    quoteButton.addEventListener("click", async () => {
        try {
            const response = await fetch("https://zenquotes.io/api/random");
            if (!response.ok) throw new Error("Failed to fetch quote");
            const data = await response.json();
            quoteDisplay.textContent = `"${data[0].q}" - ${data[0].a}`;
        } catch (error) {
            quoteDisplay.textContent = "Could not fetch quote. Please try again later.";
            console.error(error);
        }
    });
});

// last visit and localStorage
document.addEventListener("DOMContentLoaded", () => {
    const lastVisitDisplay = document.getElementById("last-visit");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date().toLocaleDateString();

    if (lastVisit) {
        lastVisitDisplay.textContent = `Your last visit was on ${lastVisit}`;
    } else {
        lastVisitDisplay.textContent = "Welcome! This is your first visit.";
    }
    localStorage.setItem("lastVisit", now);
});

// Prompt tips
document.addEventListener("DOMContentLoaded", () => {
    const tipsSection = document.getElementById("tips");
    const tips = [
        "Consistency is key to progress",
        "Remember to warm up before workouts",
        "Focus on form to prevent injury",
        "Incorporate rest days",
        "Set realistic goals",
    ];

    tips.forEach((tip) => {
        const listItem = document.createElement("li");
        listItem.textContent = tip;
        tipsSection.querySelector("ul").appendChild(listItem);
    });
});
