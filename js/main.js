// ---- Leaflet Map ---- //
const map = L.map('map').setView([49.27498053729709, -123.06938318834473],25);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([49.27498053729709, -123.06938318834473]).addTo(map);
marker.bindPopup("<b>Lunch Lady</b><br>We're here!").openPopup();