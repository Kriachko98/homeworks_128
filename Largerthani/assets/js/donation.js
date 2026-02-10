// Tabs
$(function(){
    $(".tabs--buttons button").on('click', function(){
        if(!$(this).hasClass('active')){
            $(".tabs--buttons button.active").removeClass('active')
            $(this).addClass('active')
            const tabId = $(this).data('tab')
            $(".tab.active").removeClass('active')
            $(`#${tabId}`).addClass('active')
        }
    })
});

// Donate now
// Получаем элементы DOM
let modal = document.getElementById("modal");
let donateBtn = document.getElementById("donateBtn");
let donateSubmit = document.getElementById("donateSubmit");
let closeBtn = document.getElementsByClassName("close")[0];

// Открываем модальное окно при нажатии на кнопку "Сделать пожертвование"
donateBtn.onclick = function() {
  modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на кнопку "Подтвердить" или на крестик
donateSubmit.onclick = function() {
  let donationAmount = document.getElementById("donationAmount").value;
  if (donationAmount.trim() !== "") {
    alert("Спасибо за ваше пожертвование: " + donationAmount + " грн");
    modal.style.display = "none";
  } else {
    alert("Пожалуйста, введите сумму пожертвования");
  }
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Закрываем модальное окно при клике за его пределами
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}