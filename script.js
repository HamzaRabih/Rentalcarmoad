// ...existing code...

const container = document.getElementById('car-cards-container');

for (let i = 1; i <= 14; i++) {
    const card = document.createElement('div');
    card.className = 'car-card';

    const img = document.createElement('img');
    img.src = `img/V${i}.jpg`;
    img.alt = `Voiture ${i}`;

    const title = document.createElement('h3');
    title.textContent = `Voiture ${i}`;

    card.appendChild(img);
    card.appendChild(title);
    container.appendChild(card);
}

// ...existing code...
