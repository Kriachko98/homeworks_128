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

function task4() {
  if (isNaN(n1)) {
    document.getElementById('dev_result').innerHTML = '<span style="color:red">Incorrect value</span>';
  }

  var n1 = document.getElementById('n1').valueAsNumber;
  var n2 = document.getElementById('n2').valueAsNumber;
  var min = n1 < n2 ? n1 : n2;
  var devRez = 1;

  for (var i = 1; i <= min; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      devRez = i;
    }
  }

  document.getElementById('dev_result').innerHTML = "\u0421\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A \u0432\u0430\u0448\u0438\u0445 \u0447\u0438\u0441\u0435\u043B \u0454 ".concat(devRez);
}

function task5() {
  var anyNum = document.getElementById('anyNum').value;
  var allDevRez = '';

  for (var i = 1; i <= anyNum; i++) {
    if (anyNum % i === 0) {
      allDevRez += i + ' ';
    }
  }

  document.getElementById('all_dev_result').innerHTML = "\u0412\u0441\u0456 \u0434\u0456\u043B\u044C\u043D\u0438\u043A\u0438 \u0432\u0430\u0448\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430: ".concat(allDevRez);
}

function task6() {
  var randomNumber = document.getElementById('randomNumber').value;

  if (isNaN(randomNumber) || randomNumber.length !== 5) {
    document.getElementById('polindrom_result').innerHTML = '<span style="color:red">Incorrect value</span>';
    return;
  }

  var firstNumber = Math.floor(randomNumber / 10000);
  var secondNumber = Math.floor(randomNumber % 10000 / 1000);
  var beforLastNumber = Math.floor(randomNumber / 10 % 10);
  var lastNumber = randomNumber % 10;

  if (firstNumber === lastNumber && secondNumber === beforLastNumber) {
    document.getElementById('polindrom_result').innerHTML = "\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0454 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C\u043E\u043C";
  } else {
    document.getElementById('polindrom_result').innerHTML = "\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u041D\u0415 \u0454 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C\u043E\u043C";
  }
}

function task7() {
  var amount = document.getElementById('amount').valueAsNumber;
  var total = 0;

  if (200 <= amount && amount < 300) {
    total = amount - amount * 0.03;
  } else if (300 <= amount && amount < 500) {
    total = amount - amount * 0.05;
  } else if (amount >= 500) {
    total = amount - amount * 0.07;
  } else {
    total = amount;
  }

  document.getElementById('total').innerHTML = "\u0421\u0443\u043C\u0430 \u0434\u043E \u0441\u043F\u043B\u0430\u0442\u0438 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E: ".concat(total.toFixed(2), "\u0433\u0440\u043D");
}

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