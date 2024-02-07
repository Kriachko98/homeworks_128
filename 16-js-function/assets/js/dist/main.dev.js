"use strict";

// Task 2
// function countArguments () {
//     const arg = document.getElementById('arg').value;
//     document.getElementById('sum_arg').innerHTML = arg.length;
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


function task6() {} // Task 7


function task7() {} // Task 8


function task8() {}