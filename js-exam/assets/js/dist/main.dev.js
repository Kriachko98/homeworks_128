"use strict";

// Map
function initMap(link) {
  link.remove();
  var map = L.map('map').setView([40.662017, -73.880101], 13);
  var ownIcon = L.icon({
    iconUrl: '../images/pin.svg',
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
}); // Hidden label

$('input').focus(function () {
  $(this).siblings('label').hide();
}); // Form validation

var name = '';
var email = '';
$(document).ready(function () {
  $('input').focus(function () {
    if ($(this).hasClass('is-invalid')) {
      $(this).removeClass('is-invalid');
    }
  });
  $('#feedback_form').submit(function (e) {
    e.preventDefault();
    var errors = [];
    var nameFld = $('#name');
    var emailFld = $('#email');
    name = nameFld.val().trim();
    email = emailFld.val().trim();

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
    } // Form result


    var CHAT_ID = '-1002006271390';
    var BOT_TOKEN = '7073477143:AAHlVk3vsuHDf7zcEVK-4debms0tEoyCscs';
    var message = "<b>Name: </b>".concat(name, "\r\n<b>Email: </b>").concat(email);
    var url = "https://api.telegram.org/bot".concat(BOT_TOKEN, "/sendMessage?chat_id=").concat(CHAT_ID, "&text=").concat(encodeURI(message), "&parse_mode=HTML");
    $.ajax({
      url: url,
      type: 'post',
      dataType: 'json',
      success: function success(resp) {
        if (resp.ok) {
          nameFld.val('');
          emailFld.val('');
          toast.success('Your message successfully sent.');
        } else {
          toast.error('Some error occurred.');
        }
      },
      error: function error(err) {
        toast.error(err);
      }
    });
    return false;
  });

  function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
}); // const options = {
//     method: 'POST',
//     url: 'https://api.telegram.org/bottoken/sendMessage',
//     headers: {
//       accept: 'application/json',
//       'User-Agent': 'Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)',
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       text: 'Required',
//       parse_mode: 'Optional',
//       disable_web_page_preview: false,
//       disable_notification: false,
//       reply_to_message_id: null
//     })
// };
// fetch(url, {
//     method: 'post'
// })
//     .then(resp => resp.json())
//     .then(resp => {
//         if(resp.ok){
//             nameFld.value = '';
//             emailFld.value = '';
//             toast.success('Your massage successfully sent.')
//         }else{
//             toast.error('Some error occured.')
//         }
//     })