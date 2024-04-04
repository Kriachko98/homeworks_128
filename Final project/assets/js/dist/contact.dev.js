"use strict";

function initMap(link) {
  link.remove();
  var map = L.map('map').setView([39.796931, -86.063576], 16.5);
  L.tileLayer('https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
  }).addTo(map); // const customMarker = L.icon({
  //     iconUrl: 'map-marker.png',
  //     // shadowUrl: 'leaf-shadow.png',
  //     iconSize:     [38, 95], // size of the icon
  //     // shadowSize:   [50, 64], // size of the shadow
  //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  //     // shadowAnchor: [4, 62],  // the same for the shadow
  //     // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  // });

  L.marker([39.796931, -86.063576]).addTo(map); // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  // .openPopup();
} // , {icon: customMarker}