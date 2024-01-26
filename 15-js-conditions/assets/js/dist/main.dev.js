"use strict";

function task1() {
  var age = prompt('Скільки Вам років?');

  if (age < 0) {
    alert('Невірне значення');
  } else if (age <= 11) {
    alert('Ви дитина');
  } else if (age <= 17) {
    alert('Ви підліток');
  } else if (age <= 59) {
    alert('Ви дорослий');
  } else if (age > 59) {
    alert('Ви пенсіонер');
  } else {
    alert('Невірне значення');
  }
}

function task2() {
  var numb = prompt('Напишіть цифру');
  numb = Number(numb);

  switch (numb) {
    case 0:
      alert(')');
      break;

    case 1:
      alert('!');
      break;

    case 2:
      alert('@');
      break;

    case 3:
      alert('#');
      break;

    case 4:
      alert('$');
      break;

    case 5:
      alert('%');
      break;

    case 6:
      alert('^');
      break;

    case 7:
      alert('&');
      break;

    case 8:
      alert('*');
      break;

    case 9:
      alert('(');
      break;

    default:
      alert('Це не цифра');
  }
}

function task3() {}

function task4() {}

function task5() {}

function task6() {}

function task7() {}