"use strict";

// Task 2
// function countArguments () {
//     const arg = document.getElementById('arg').value;
//     document.getElementById('sum_arg').innerHTML = arg.value.length;
// }
function countArguments() {
  var inputVal = document.getElementById('arg').value;
  var numOfArguments = inputVal.split(',').filter(function (arg) {
    return arg.trim() !== '';
  }).length;
  document.getElementById('sum_arg').innerHTML = numOfArguments;
} // Task 3


function getValue(a, b) {
  var value = '';

  if (a < b) {
    value = -1;
  } else if (a > b) {
    value = 1;
  } else {
    value = 0;
  }

  return value;
}

function task3() {
  var a = document.getElementById('numb_1').valueAsNumber;
  var b = document.getElementById('numb_2').valueAsNumber;

  if (isNaN(a)) {
    value = '<span style="color:red">Invalid value</span>';
  } else if (isNaN(b)) {
    value = '<span style="color:red">Invalid value</span>';
  } else {
    value = "".concat(getValue(a, b));
  }

  document.getElementById('value_result').innerHTML = value;
} // Task 4


function factorial() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var result = 1;

  for (var i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

function calcFactorial() {
  var numb = document.getElementById('number').valueAsNumber;
  var result = '';

  if (isNaN(numb)) {
    result = '<span style="color:red">Invalid value</span>';
  } else {
    result = "".concat(numb, "! = ").concat(factorial(numb));
  }

  document.getElementById('fact_result').innerHTML = result;
} // Task 5


function concRez() {
  var a1 = document.getElementById('a1').value;
  var b2 = document.getElementById('b2').value;
  var c3 = document.getElementById('c3').value;
  var result = '';

  if (a1 !== '' && b2 !== '' && c3 !== '') {
    result = concatination(a1, b2, c3);
  } else {
    result = '<span style="color:red">Заповніть всі поля</span>';
  }

  document.getElementById('fullNumb').innerHTML = result;
}

var concatination = function concatination(a1, b2, c3) {
  return a1 + b2 + c3;
}; // Task 6


function task6() {
  var height = document.getElementById('height').valueAsNumber;
  var width = document.getElementById('width').valueAsNumber;
  var square = calcSquare(height, width);
  document.getElementById('square_result').innerHTML = "\u041F\u043B\u043E\u0449\u0430 \u043F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A\u0430 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454: ".concat(square);
}

function calcSquare(height, width) {
  if (isNaN(height)) {
    return width * width;
  } else if (isNaN(width)) {
    return height * height;
  } else {
    return height * width;
  }
} // Task 7


function task7() {
  var anyNum = document.getElementById('perfect').valueAsNumber;
  var result = calcPerfectNum(anyNum);

  if (result === true) {
    document.getElementById('isPerfect').innerHTML = "\u0427\u0438\u0441\u043B\u043E ".concat(anyNum, " \u0454 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0438\u043C!");
  } else {
    document.getElementById('isPerfect').innerHTML = "\u0427\u0438\u0441\u043B\u043E ".concat(anyNum, " \u041D\u0415 \u0454 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0438\u043C!");
  }
}

function calcPerfectNum(anyNum) {
  var sum = 0;

  for (var i = 1; i < anyNum; i++) {
    if (anyNum % i == 0) {
      sum += i;
    }
  }

  if (sum === anyNum) {
    return true;
  } else {
    return false;
  }
} // Task 8
// function task8() {
//     const min = document.getElementById('firstNum').valueAsNumber;
//     const max = document.getElementById('secondNum').valueAsNumber;
//     let from = min;
//     let to = max;
//     if (min > max){
//         from = max;
//         to = min;
//     }
// }
// function calcPerfectRange (from, to){
//     let sum = 0;
//     for (let i = from; i < to; i++){
//         for (let k = 1; k < i; k++){
//             if (i % k == 0){
//                 sum += k;
//             }
//         }
//         if(sum === i){
//             return sum;
//         }
//     }
// }


function task8() {
  var min = document.getElementById('firstNum').valueAsNumber;
  var max = document.getElementById('secondNum').valueAsNumber;
  var from = min;
  var to = max;

  if (min > max) {
    from = max;
    to = min;
  }

  var perfectNumbersInRange = calcPerfectRange(from, to);
  document.getElementById('perfectNums').innerHTML = "\u0412 \u0432\u0430\u0448\u043E\u043C\u0443 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0456 \u0442\u0430\u043A\u0456 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0456 \u0447\u0438\u0441\u043B\u0430: ".concat(perfectNumbersInRange);
}

function calcPerfectRange(from, to) {
  var perfectNumbers = [];

  for (var i = from; i <= to; i++) {
    var sum = 0;

    for (var k = 1; k < i; k++) {
      if (i % k === 0) {
        sum += k;
      }
    }

    if (sum === i) {
      perfectNumbers.push(i);
    }
  }

  return perfectNumbers;
}