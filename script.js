const occasions = [
    {
        title: "Porsche 911 Carrera S",
        year: "2020",
        km: "34.500",
        fuel: "Benzine",
        desc: "Exclusieve Porsche in nieuwstaat. Volledig dealer onderhouden.",
        images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800"]
    }
];

const carList = document.getElementById('car-list');
if(carList) {
    occasions.forEach((car, index) => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.onclick = () => openModal(index);
        card.innerHTML = `
            <div class="car-image"><img src="${car.images[0]}" alt="${car.title}"></div>
            <div class="car-info">
                <h3>${car.title}</h3>
                <p class="price-call">Voor prijsopgave vraag een offerte aan</p>
                <div class="specs"><span>${car.year}</span> | <span>${car.km} km</span></div>
            </div>`;
        carList.appendChild(card);
    });
}

let currentCarIndex = 0;
function openModal(index) {
    currentCarIndex = index;
    const car = occasions[index];
    document.getElementById('modal-title').innerText = car.title;
    document.getElementById('modal-desc').innerText = car.desc;
    document.getElementById('modal-main-img').src = car.images[0];
    document.getElementById('carModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('carModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = (e) => { if (e.target.id === 'carModal') closeModal(); }
