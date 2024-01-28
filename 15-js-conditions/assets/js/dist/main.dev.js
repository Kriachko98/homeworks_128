"use strict";

function task1() {
  var age = document.getElementById('age').valueAsNumber;
  var ageRez = '';

  if (age < 0) {
    ageRez = 'Невірне значення';
  } else if (age <= 11) {
    ageRez = 'Ви дитина';
  } else if (age <= 17) {
    ageRez = 'Ви підліток';
  } else if (age <= 59) {
    ageRez = 'Ви дорослий';
  } else if (age > 59) {
    ageRez = 'Ви пенсіонер';
  } else {
    ageRez = 'Невірне значення';
  }

  document.getElementById('age_result').innerHTML = ageRez;
}

function task2() {
  var numb = document.getElementById('numb').valueAsNumber;
  var sign = '';

  switch (numb) {
    case 0:
      sign = ')';
      break;

    case 1:
      sign = '!';
      break;

    case 2:
      sign = '@';
      break;

    case 3:
      sign = '#';
      break;

    case 4:
      sign = '$';
      break;

    case 5:
      sign = '%';
      break;

    case 6:
      sign = '^';
      break;

    case 7:
      sign = '&';
      break;

    case 8:
      sign = '*';
      break;

    case 9:
      sign = '(';
      break;

    default:
      sign = 'Це не цифра';
  }

  document.getElementById('numb_sign').innerHTML = sign;
}

function task3() {
  var numb_1 = document.getElementById('numb_1').valueAsNumber;
  var numb_2 = document.getElementById('numb_2').valueAsNumber;
  var sum = 0;
  var from = numb_1;
  var to = numb_2;

  if (isNaN(numb_1)) {
    document.getElementById('sum_result').innerHTML = '<span style="color:red">Incorrect value. Enter first number</span>';
  } else if (numb_1 > numb_2) {
    from = numb_2;
    to = numb_1;
  }

  if (isNaN(numb_2)) {
    document.getElementById('sum_result').innerHTML = '<span style="color:red">Incorrect value. Enter second number</span>';
  }

  for (var i = from; i <= to; i++) {
    sum += i;
  }

  document.getElementById('sum_result').innerHTML = "\u0421\u0443\u043C\u0430 \u0447\u0438\u0441\u0435\u043B \u0432 \u0432\u0430\u0448\u043E\u043C\u0443 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0456 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(sum);
}

function task4() {}

function task5() {}

function task6() {}

function task7() {}

function task8() {}

function task9() {}

function task10() {}

function task11() {
  var multy = '';

  for (var i = 2; i <= 9; i++) {
    multy += '<ul>';

    for (var y = 1; y <= 10; y++) {
      multy += "<li>".concat(i, " * ").concat(y, " = ").concat(i * y, "</li>");
    }

    multy += '</ul>';
  }

  document.getElementById('multy_table').innerHTML = multy;
}

function task12() {}