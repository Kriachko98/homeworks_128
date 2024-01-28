function task1() {
    let a = 0.1;
    let b = 0.2;
    let sum = a + b;
    alert(sum.toFixed(1));
}

function task2() {
    let strNum = '1';
    let numNum = 2;
    alert(Number(strNum) + numNum);
}

function task3() {
    const files_820mb = 820 / 1024;
    const userDiskMemory = prompt('Який обсяг пам\'яті на вашій флешці?');
    const quantityOfFiles = userDiskMemory / files_820mb;
    alert(`На вашу флешку вміститься ${parseInt(quantityOfFiles)} файлів`);
}

function task4() {
    const moneyInWallet = prompt('Скільки грошей в вашому гаманці?');
    const priceOfChocolate = prompt('Скільки коштує шоколадка?');
    const quantityOfChocolate = moneyInWallet / priceOfChocolate;
    const change = moneyInWallet - priceOfChocolate * parseInt(quantityOfChocolate);
    alert(`Ви зможете купити ${parseInt(quantityOfChocolate)} шоколадок`);
    alert(`Залишиться решта в розмірі ${change.toFixed(2)} грн`);
}

function task5() {
    const randomNumber = prompt('Напишіть тризначне число');
    const firstNumber = parseInt(Number(randomNumber) / 100);
    const thirdNumber = randomNumber % 10;
    const secondNumber = parseInt((randomNumber / 10) % 10);
    const NumberMirrow = thirdNumber.toString(10) + secondNumber.toString(10) + firstNumber.toString(10);
    alert(`Перегорнуте число ${NumberMirrow}`);
}

function task6() {
    const deposit = prompt('Введіть суму вкладу');
    const period = prompt('Введіть кількість місяців депозитного вкладу');
    const persentPerMounth = 5 / 12;
    const persentBenefit = period * persentPerMounth / 100 * deposit;
    alert(`За вказаний вами термін ви отримаєте ${persentBenefit.toFixed(2)} грн накопичених відсотків`);
}

function task7() {
    alert('Перший вираз повертає 0, другий - 2, а третій - 3')
}
