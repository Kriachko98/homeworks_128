"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
} // Toast


var toast = {
  timeoutID: null,
  styles: {
    position: 'fixed',
    left: '120px',
    top: '80px',
    'border-radius': '10px',
    padding: '15px',
    color: '#fff',
    'z-index': 1
  },
  success: function success(text) {
    this.show(text, 'success');
  },
  error: function error(text) {
    this.show(text, 'error');
  },
  info: function info(text) {
    this.show(text, 'info');
  },
  show: function show(text) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
    var myToast = document.getElementById('my-toast');

    if (myToast) {
      clearTimeout(this.timeoutID);
      myToast.remove();
    }

    var style = '';
    Object.entries(this.styles).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      style += "".concat(key, ": ").concat(value, ";");
    });

    switch (type) {
      case 'success':
        style += 'background-color: #198754;';
        break;

      case 'error':
        style += 'background-color: #dc3445;';
    }

    var html = "<div id=\"my-toast\" class=\"my-toast ".concat(type, "\" style=\"").concat(style, "\">\n        <p class=\"mb-0\">").concat(text, "</p>\n      </div>");
    document.body.insertAdjacentHTML('afterbegin', html);
    this.hide(3000);
  },
  hide: function hide(timeout) {
    this.timeoutID = setTimeout(function () {
      var myToast = document.getElementById('my-toast');

      if (myToast !== null) {
        myToast.remove();
      }
    }, timeout);
  }
}; // Form validation

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

    function isValidEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }

    if (firstName === '') {
      errors.push('Enter your first name, please');
      firstNameFld.addClass('is-invalid');
    } else {
      if (!/^\S+$/.test(lastName)) {
        errors.push('Last name must be one word');
        firstNameFld.addClass('is-invalid');
      } else if (/\d/.test(lastName)) {
        errors.push('Last name should not contain digits');
        firstNameFld.addClass('is-invalid');
      }
    }

    if (lastName === '') {
      errors.push('Enter your last name, please');
      lastNameFld.addClass('is-invalid');
    } else {
      if (!/^\S+$/.test(lastName)) {
        errors.push('Last name must be one word');
        lastNameFld.addClass('is-invalid');
      } else if (/\d/.test(lastName)) {
        errors.push('Last name should not contain digits');
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
});