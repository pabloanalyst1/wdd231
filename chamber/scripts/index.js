// API Key & URL de OpenWeatherMap
const apiKey = '28b1504f28b3f24ee9dac78d9d5f063c';
const city = 'Guatemala';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

// Weather data
async function getWeatherData() {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) throw new Error('Error en la respuesta de la API');
        const data = await response.json();

        // Get and show current weather
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        document.getElementById('currentTemp').textContent = Math.round(temperature);
        document.getElementById('weatherDescription').textContent = capitalizeWords(description);

        // Call function
        getWeatherForecast();
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Forecast for 3 days
async function getWeatherForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) throw new Error('Error en la respuesta de la API');
        const data = await response.json();

        // Filter the forecast each 24 hours (1 per day)
        const forecastList = data.list.filter((item, index) => index % 8 === 0); // 1 day equals to 8 gathers
        const threeDayForecast = forecastList.slice(0, 3);

        // Show it on the HTML
        const forecastContainer = document.getElementById('forecast');
        forecastContainer.innerHTML = ''; // This cleans before adding the content

        threeDayForecast.forEach(day => {
            const date = new Date(day.dt_txt).toLocaleDateString();
            const temp = Math.round(day.main.temp);
            const description = capitalizeWords(day.weather[0].description);

            // New list per day
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${date}:</strong> ${temp}°C, ${description}`;
            forecastContainer.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
    }
}

// Capitalize description
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Call function to gather wather data
getWeatherData();

// Read Json
async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Error al cargar los datos');
        const members = await response.json(); // Parse

        // Filter businesses with Silver or Gold
        const spotlightMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);

        // Randomize businesses
        const randomSpotlights = getRandomMembers(spotlightMembers, 3);

        displaySpotlights(randomSpotlights);
    } catch (error) {
        console.error('Error fetching spotlights:', error);
    }
}

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displaySpotlights(members) {
    const spotlightContainer = document.getElementById('spotlight-container');
    spotlightContainer.innerHTML = ''; // Cleans

    members.forEach(member => {
        const spotlight = document.createElement('div');
        spotlight.classList.add('spotlight');
        spotlight.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        spotlightContainer.appendChild(spotlight);
    });
}

// load spotlights
loadSpotlights();
