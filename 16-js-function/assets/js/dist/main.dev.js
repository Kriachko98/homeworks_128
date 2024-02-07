"use strict";

// Task 2
// function countArguments () {
//     const arg = document.getElementById('arg').value;
//     document.getElementById('sum_arg').innerHTML = arg.length;
// }
// Task 3
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
}

function task5() {}

function task6() {}

function task7() {}

function task8() {}