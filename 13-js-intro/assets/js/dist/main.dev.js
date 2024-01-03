"use strict";

// Неправильні імена змінних та різновиди коментарів

/* let user-name
    let 9userName
    let &userName
    let user name
    let ім'я
    let = 'name' */
// Правильні варіанти змінних
var userNames;
var user_names;
var $userNames;
var UserNames;

function task1() {
  var userName = prompt('Як вас звати?');
  alert('Привіт, ' + userName + '!'); // alert('Привіт, ${userName}!')
}

function task2() {
  var userBirthYear = parseInt(prompt('Напишіть рік вашого народження'), 10);
  var currentYear = new Date().getFullYear();
  var userAge = currentYear - userBirthYear;
  alert("\u0412\u0430\u043C ".concat(userAge, " \u0440\u043E\u043A\u0456\u0432"));
}

function task3() {
  var squareSide = parseFloat(prompt('Напишіть довжину сторони квадрата'));
  var perimeter = squareSide * 4;
  alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(perimeter));
}

function task4() {
  var rollRadius = parseFloat(prompt('Напишіть радіус кола'));
  var rollYardage = Math.PI * rollRadius * rollRadius;
  alert("\u041F\u043B\u043E\u0449\u0430 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0456 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(rollYardage));
}

function task5() {
  var distance = parseFloat(prompt('Напишіть відстань в кілометрах'));
  var timeForDistance = parseFloat(prompt('Напишіть планований час в дорозі в годинах'));
  var speed = distance / timeForDistance;
  alert("\u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044C \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(speed, " \u043A\u043C \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443"));
}

function task6() {
  var dollar = parseInt(prompt('Напишіть суму долларів для обміну'), 10);
  var dollar_to_euro = 0.91009;
  var euro = dollar * dollar_to_euro;
  alert("\u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435 ".concat(euro, " \u0435\u0432\u0440\u043E \u0437\u0430 ").concat(dollar, " \u0434\u043E\u043B\u043B\u0430\u0440\u0456\u0432"));
}