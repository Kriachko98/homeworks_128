// Map
function initMap (link) {
    link.remove();
    const map = L.map('map').setView([40.662017, -73.880101], 13);
    const ownIcon = L.icon({
        iconUrl: '../images/pin.svg',
    
        iconSize:     [106, 106], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    });


    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
    }).addTo(map);

    L.marker([40.678930, -73.906647], {icon: ownIcon}).addTo(map);
}



// Main Slider
$(function(){
    $("#mainSlider").lightSlider({
        item: 1,
        slideMargin: 0,
        auto: true,
        loop: true,
        pause: 4000,
        vertical: true,
        verticalHeight: 700,
        controls: false,
    })
});



// Smooth scroll main button
function scrollToElem (selector){
    const top = document.querySelector(selector).offsetTop
    console.log(top);
    window.scrollTo({
        top: top,
        behavior: 'smooth',
    })
};



// Smooth scroll navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', scrollToSection);
    });
  
    function scrollToSection(event) {
      event.preventDefault();
  
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  });
  
  

// Chandes headers height
window.addEventListener('scroll', function (){
    const header = document.getElementById('header');
    const targetSection = document.getElementById('wwd--sec');

    if(window.scrollY >= targetSection.offsetTop){
    if(!header.classList.contains('scrolled')){
        header.classList.add('scrolled');
    }
   }else{
    if(header.classList.contains('scrolled')){
        header.classList.remove('scrolled');
    }
   }
});



// Gallery
lightGallery(document.getElementById('static-thumbnails'), {
    animateThumb: false,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,
});



// Hidden label
$('input').focus(function(){
    $(this).siblings('label').hide();
});



// Form validation
$(document).ready(function() {
    $('input').focus(function() {
        if ($(this).hasClass('is-invalid')) {
            $(this).removeClass('is-invalid');
        }
    });

    $('#feedback_form').submit(function(e) {
        e.preventDefault();
        const errors = [];
        const nameFld = $('#name');
        const emailFld = $('#email');
        const name = nameFld.val().trim();
        const email = emailFld.val().trim();

        if (name === '') {
            errors.push('Enter your name, please');
            nameFld.addClass('is-invalid');
        } else {
            if (name.length < 2) {
                errors.push('Enter your name and surname, please');
                nameFld.addClass('is-invalid');
            }
        }

        if (email === '') {
            errors.push('Enter your email, please');
            emailFld.addClass('is-invalid');
        } else {
            if (!isValidEmail(email)) {
                errors.push('Incorrect email');
                emailFld.addClass('is-invalid');
            }
        }

        if (errors.length) {
            alert(errors.join('. '));
            return false;
        }

        return false;
    });
});

function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}