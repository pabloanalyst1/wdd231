// Hamb menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    const toggle = document.querySelector('.menu-toggle');
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}

// Motivational 
document.addEventListener("DOMContentLoaded", () => {
    const weatherButton = document.getElementById("weather-button");
    const weatherDisplay = document.getElementById("weather");

    weatherButton.addEventListener("click", async () => {
        const apiKey = "28b1504f28b3f24ee9dac78d9d5f063c";
        const city = "London";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch weather data");
            const data = await response.json();
            console.log(data);
            weatherDisplay.textContent = `The weather in ${city} is ${data.weather[0].description} with a temperature of ${data.main.temp}°C. It's time to exercise!`;
        } catch (error) {
            weatherDisplay.textContent = "Could not fetch weather data. Please try again later.";
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
