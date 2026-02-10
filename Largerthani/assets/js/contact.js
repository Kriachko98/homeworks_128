function initMap(link) {
    link.remove();

    const map = L.map('map').setView([39.796931, -86.063576], 16.5);

    L.tileLayer('https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);

    const customMarker = L.icon({
        iconUrl: 'assets/images/map-marker.png',
        // shadowUrl: 'leaf-shadow.png',
    
        iconSize:     [36, 36], // size of the icon
        // shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        // shadowAnchor: [4, 62],  // the same for the shadow
        // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    L.marker([39.796931, -86.063576],{icon: customMarker}).addTo(map)
        // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        // .openPopup();
}


// Toast
const toast = {
    timeoutID:null,
    styles: {
        position: 'fixed',
        left: '120px',
        top: '80px',
        'border-radius': '10px',
        padding: '15px',
        color:'#fff',
        'z-index': 1
    },
    success: function(text){
        this.show(text, 'success')
    },
    error: function(text){
        this.show(text, 'error')
    },
    info: function(text){
        this.show(text, 'info')
    },
    show: function(text,type='info'){
        const myToast = document.getElementById('my-toast')
        if(myToast){
            clearTimeout(this.timeoutID);
            myToast.remove();
        }
        let style = '';
        Object.entries(this.styles).forEach(([key,value])=> {
            style += `${key}: ${value};`
        })
        switch(type){
            case 'success':
                style += 'background-color: #198754;'
                break;
            case 'error':
                style += 'background-color: #dc3445;'
        }
        const html = `<div id="my-toast" class="my-toast ${type}" style="${style}">
        <p class="mb-0">${text}</p>
      </div>`;
      document.body.insertAdjacentHTML('afterbegin',html);
      this.hide(3000);
    },
    hide: function(timeout){
        this.timeoutID = setTimeout(function(){
                const myToast = document.getElementById('my-toast')
            if(myToast!==null){
                myToast.remove();
            }
        },timeout);
        
    }
}


// Form validation
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
    } 
    
    // Form result
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

