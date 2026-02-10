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
};


// Form validation
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
    } 
    
    // Form result
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
