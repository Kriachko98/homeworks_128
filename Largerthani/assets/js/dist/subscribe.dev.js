"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Toast
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

var emailSbc = '';
$(document).ready(function () {
  $('input').focus(function () {
    if ($(this).hasClass('is-invalid')) {
      $(this).removeClass('is-invalid');
    }
  });
  $('#subscribe_form').submit(function (e) {
    e.preventDefault();
    var errors = [];
    var emailSbcFld = $('#email_subscribe');
    emailSbc = emailSbcFld.val().trim();

    function isValidEmail(emailSbc) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(emailSbc);
    }

    if (emailSbc === '') {
      errors.push('Enter your email, please');
      emailSbcFld.addClass('is-invalid');
    } else {
      if (!isValidEmail(emailSbc)) {
        errors.push('Incorrect email');
        emailSbcFld.addClass('is-invalid');
      }
    }

    if (errors.length) {
      alert(errors.join('. '));
      return false;
    } // Form result


    var CHAT_ID = '-1002006271390';
    var BOT_TOKEN = '7073477143:AAHlVk3vsuHDf7zcEVK-4debms0tEoyCscs';
    var message = "<b>Email: </b>".concat(emailScb);
    var url = "https://api.telegram.org/bot".concat(BOT_TOKEN, "/sendMessage?chat_id=").concat(CHAT_ID, "&text=").concat(encodeURI(message), "&parse_mode=HTML");
    $.ajax({
      url: url,
      type: 'post',
      dataType: 'json',
      success: function success(resp) {
        if (resp.ok) {
          emailSbcFld.val('');
          toast.success('You have successfully subscribed');
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