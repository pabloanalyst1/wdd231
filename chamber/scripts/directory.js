document.addEventListener("DOMContentLoaded", async function() {

    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');
    const directory = document.getElementById('directory');

    async function loadMembers() {
        try {
            const response = await fetch('data/members.json'); // Load Jason
            const members = await response.json(); // Convert to an object array

            displayMembers(members);
        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    // Show members in cards
    function displayMembers(members) {
        directory.innerHTML = ''; // Clean previous content

        members.forEach(member => {
            // Create indivitdual cards
            const card = document.createElement('div');
            card.classList.add('card');

            // Cardt content
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            `;

            // Add card to container
            directory.appendChild(card);
        });
    }

    loadMembers();

    // Grid and list
    gridViewButton.addEventListener('click', () => {
        directory.classList.remove('list-view');
        directory.classList.add('grid-view');   
    });

    listViewButton.addEventListener('click', () => {
        directory.classList.remove('grid-view'); 
        directory.classList.add('list-view');    
    });

    const yearSpan = document.getElementById("currentyear");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    const lastModifiedSpan = document.getElementById("lastModified");
    lastModifiedSpan.textContent = `Last updated: ${document.lastModified}`;
});
