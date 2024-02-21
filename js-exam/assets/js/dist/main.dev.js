"use strict";

function initMap(link) {
  link.remove();
  var map = L.map('map').setView([40.662017, -73.880101], 13);
  var ownIcon = L.icon({
    iconUrl: '//images/pin-min.png',
    iconSize: [106, 106],
    // size of the icon
    iconAnchor: [22, 94] // point of the icon which will correspond to marker's location

  });
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
  }).addTo(map);
  L.marker([40.678930, -73.906647], {
    icon: ownIcon
  }).addTo(map); // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  // .openPopup();
}