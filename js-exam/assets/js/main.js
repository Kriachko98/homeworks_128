// Map
function initMap (link) {
    link.remove();
    const map = L.map('map').setView([40.662017, -73.880101], 13);
    const ownIcon = L.icon({
        iconUrl: '//images/pin-min.png',
    
        iconSize:     [106, 106], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    });


    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
    }).addTo(map);

    L.marker([40.678930, -73.906647], {icon: ownIcon}).addTo(map);
}


// Main slider
// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('.first--screen, .second--screen, .third--screen, .fourth--screen, .fifth--screen');
//     let currentSection = 0;
  
//     document.querySelector('.arrow--down a').addEventListener('click', function(event) {
//       event.preventDefault();
//       sections[currentSection].classList.remove('active');
//       currentSection = (currentSection + 1) % sections.length;
//       sections[currentSection].classList.add('active');
//     });
  
//     // Додайте подібний код для кнопки вгору, якщо потрібно
//   });
  

// Main Slider
$(function(){
    $("#mainSlider").lightSlider({
        item: 1,
        // autoWidth: true,
        slideMargin: 0,
        auto: true,
        loop: true,
        pause: 4000,
        vertical: true,
        // adaptiveHeight: true,
        verticalHeight: 700,
    })
});

// Smooth scroll
function scrollToElem (selector){
    const top = document.querySelector(selector).offsetTop
    console.log(top);
    window.scrollTo({
        top: top,
        behavior: 'smooth',
    })
};