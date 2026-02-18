// VOORRAAD DATA
const occasions = [
    {
        title: "Porsche 911 Carrera S",
        year: "2020",
        km: "34.500",
        fuel: "Benzine",
        desc: "Een icoon in absolute nieuwstaat. Deze Porsche is uitgevoerd in GT-zilver en voorzien van alle gewenste opties zoals Sport Chrono en een panoramadak.",
        images: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200"
        ]
    },
    {
        title: "BMW M4 Competition",
        year: "2021",
        km: "18.200",
        fuel: "Benzine",
        desc: "Kracht en elegantie gecombineerd. Deze M4 Competition levert adembenemende prestaties en verkeert in showroomstaat.",
        images: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1200"
        ]
    }
];

// GENEREREN VAN CAR CARDS
const carList = document.getElementById('car-list');

if(carList) {
    occasions.forEach((car, index) => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.onclick = () => openModal(index);
        card.innerHTML = `
            <div class="car-image">
                <img src="${car.images[0]}" alt="${car.title}">
            </div>
            <div class="car-info">
                <h3>${car.title}</h3>
                <p class="price-call">Voor prijsopgave vraag een offerte aan</p>
                <div class="specs">
                    <span>${car.year}</span>
                    <span>${car.km} km</span>
                    <span>${car.fuel}</span>
                </div>
            </div>
        `;
        carList.appendChild(card);
    });
}

// MODAL FUNCTIES
let currentCarIndex = 0;
let currentImgIndex = 0;

function openModal(index) {
    currentCarIndex = index;
    currentImgIndex = 0;
    const car = occasions[index];
    
    document.getElementById('modal-title').innerText = car.title;
    document.getElementById('modal-desc').innerText = car.desc;
    document.getElementById('modal-specs').innerText = `Bouwjaar: ${car.year} | Kilometerstand: ${car.km} KM | Brandstof: ${car.fuel}`;
    updateModalImage();
    
    document.getElementById('carModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('carModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateModalImage() {
    const imgElement = document.getElementById('modal-main-img');
    imgElement.src = occasions[currentCarIndex].images[currentImgIndex];
}

function changeImage(n) {
    currentImgIndex += n;
    const imgs = occasions[currentCarIndex].images;
    if (currentImgIndex >= imgs.length) currentImgIndex = 0;
    if (currentImgIndex < 0) currentImgIndex = imgs.length - 1;
    updateModalImage();
}

// Sluiten bij klik buiten de content
window.onclick = (e) => {
    if (e.target.id === 'carModal') closeModal();
}