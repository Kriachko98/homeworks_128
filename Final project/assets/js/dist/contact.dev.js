"use strict";

function initMap(link) {
  link.remove();
  var map = L.map('map').setView([39.796931, -86.063576], 16.5);
  L.tileLayer('https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
  }).addTo(map);
  var customMarker = L.icon({
    iconUrl: 'assets/images/map-marker.png',
    // shadowUrl: 'leaf-shadow.png',
    iconSize: [36, 36],
    // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor: [22, 94] // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

  });
  L.marker([39.796931, -86.063576], {
    icon: customMarker
  }).addTo(map); // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  // .openPopup();
} // Form validation


var firstName = '';
var lastName = '';
var email = '';
var subject = '';
var comment = '';
$(document).ready(function () {
  $('input').focus(function () {
    if ($(this).hasClass('is-invalid')) {
      $(this).removeClass('is-invalid');
    }
  });
  $('#feedback_form').submit(function (e) {
    e.preventDefault();
    var errors = [];
    var firstNameFld = $('#first-name');
    var lastNameFld = $('#last-name');
    var emailFld = $('#email');
    var subjectFld = $('#subject');
    var commentFld = $('#comment');
    firstName = firstNameFld.val().trim();
    lastName = lastNameFld.val().trim();
    email = emailFld.val().trim();
    subject = subjectFld.val().trim();
    comment = commentFld.val().trim();

    if (firstName === '') {
      errors.push('Enter your first name, please');
      nameFld.addClass('is-invalid');
    } else {
      if (firstName.length < 2) {
        errors.push('Enter only your first name, please');
        firstNameFld.addClass('is-invalid');
      }
    }

    if (lastName === '') {
      errors.push('Enter your last name, please');
      nameFld.addClass('is-invalid');
    } else {
      if (lastName.length < 2) {
        errors.push('Enter only your last name, please');
        lastNameFld.addClass('is-invalid');
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
    var message = "<b>First Name: </b>".concat(firstName, "\r\n<b>Last Name: </b>").concat(lastName, "\r\n<b>Email: </b>").concat(email, "\r\n<b>Subject: </b>").concat(subject, "\r\n<b>Comment: </b>").concat(comment);
    var url = "https://api.telegram.org/bot".concat(BOT_TOKEN, "/sendMessage?chat_id=").concat(CHAT_ID, "&text=").concat(encodeURI(message), "&parse_mode=HTML");
    $.ajax({
      url: url,
      type: 'post',
      dataType: 'json',
      success: function success(resp) {
        if (resp.ok) {
          firstNameFld.val('');
          lastNameFld.val('');
          emailFld.val('');
          subjectFld.val('');
          commentFld.val('');
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
});