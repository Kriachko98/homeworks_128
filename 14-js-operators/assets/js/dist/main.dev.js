"use strict";

function task1() {
  var a = 0.1;
  var b = 0.2;
  var sum = a + b;
  alert(sum.toFixed(1));
}

function task2() {
  var strNum = '1';
  var numNum = 2;
  alert(Number(strNum) + numNum);
}

function task3() {
  var files_820mb = 820 / 1024;
  var userDiskMemory = prompt('Який обсяг пам\'яті на вашій флешці?');
  var quantityOfFiles = userDiskMemory / files_820mb;
  alert("\u041D\u0430 \u0432\u0430\u0448\u0443 \u0444\u043B\u0435\u0448\u043A\u0443 \u0432\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F ".concat(parseInt(quantityOfFiles), " \u0444\u0430\u0439\u043B\u0456\u0432"));
}

function task4() {
  var moneyInWallet = prompt('Скільки грошей в вашому гаманці?');
  var priceOfChocolate = prompt('Скільки коштує шоколадка?');
  var quantityOfChocolate = moneyInWallet / priceOfChocolate;
  var change = moneyInWallet - priceOfChocolate * parseInt(quantityOfChocolate);
  alert("\u0412\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(parseInt(quantityOfChocolate), " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A"));
  alert("\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F \u0440\u0435\u0448\u0442\u0430 \u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u0456 ".concat(change.toFixed(2), " \u0433\u0440\u043D"));
}

function task5() {
  var randomNumber = prompt('Напишіть тризначне число');
  var firstNumber = parseInt(Number(randomNumber) / 100);
  var thirdNumber = randomNumber % 10;
  var secondNumber = parseInt(randomNumber / 10 % 10);
  var NumberMirrow = thirdNumber.toString(10) + secondNumber.toString(10) + firstNumber.toString(10);
  alert("\u041F\u0435\u0440\u0435\u0433\u043E\u0440\u043D\u0443\u0442\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(NumberMirrow));
}

function task6() {
  var deposit = prompt('Введіть суму вкладу');
  var period = prompt('Введіть кількість місяців депозитного вкладу');
  var persentPerMounth = 5 / 12;
  var persentBenefit = period * persentPerMounth / 100 * deposit;
  alert("\u0417\u0430 \u0432\u043A\u0430\u0437\u0430\u043D\u0438\u0439 \u0432\u0430\u043C\u0438 \u0442\u0435\u0440\u043C\u0456\u043D \u0432\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u0454\u0442\u0435 ".concat(persentBenefit.toFixed(2), " \u0433\u0440\u043D \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0435\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432"));
}

function task7() {
  alert('Перший вираз повертає 0, другий - 2, а третій - 3');
}