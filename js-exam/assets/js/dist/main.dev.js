"use strict";

// Map
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
  }).addTo(map);
} // Main Slider


$(function () {
  $("#mainSlider").lightSlider({
    item: 1,
    slideMargin: 0,
    auto: true,
    loop: true,
    pause: 4000,
    vertical: true,
    verticalHeight: 700,
    controls: false
  });
}); // Smooth scroll main button

function scrollToElem(selector) {
  var top = document.querySelector(selector).offsetTop;
  console.log(top);
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  });
}

; // Smooth scroll navigation

document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', scrollToSection);
  });

  function scrollToSection(event) {
    event.preventDefault();
    var targetId = event.currentTarget.getAttribute('href').substring(1);
    var targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  }
}); // Chandes headers height

window.addEventListener('scroll', function () {
  var header = document.getElementById('header');
  var targetSection = document.getElementById('wwd--sec');

  if (window.scrollY >= targetSection.offsetTop) {
    if (!header.classList.contains('scrolled')) {
      header.classList.add('scrolled');
    }
  } else {
    if (header.classList.contains('scrolled')) {
      header.classList.remove('scrolled');
    }
  }
}); // Gallery

lightGallery(document.getElementById('static-thumbnails'), {
  animateThumb: false,
  zoomFromOrigin: false,
  allowMediaOverlap: true,
  toggleThumb: true
});