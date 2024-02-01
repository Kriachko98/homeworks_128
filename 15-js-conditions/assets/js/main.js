function task1() {
    const age = document.getElementById('age').valueAsNumber;
    let ageRez = '';

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
    const numb = document.getElementById('numb').valueAsNumber;
    let sign = '';

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
    const numb_1 = document.getElementById('numb_1').valueAsNumber;
    const numb_2 = document.getElementById('numb_2').valueAsNumber;
    let sum = 0;
    let from = numb_1;
    let to = numb_2;

    if(isNaN(numb_1)){
        document.getElementById('sum_result').innerHTML = '<span style="color:red">Incorrect value. Enter first number</span>';
    } else if (numb_1 > numb_2){
        from = numb_2;
        to = numb_1;
    }
    if(isNaN(numb_2)){
        document.getElementById('sum_result').innerHTML = '<span style="color:red">Incorrect value. Enter second number</span>';
    }

    for(let i = from; i <= to; i++){
        sum += i;
    }

    document.getElementById('sum_result').innerHTML = `Сума чисел в вашому диапазоні дорівнює ${sum}`;
}

function task4() {
    if(isNaN(n1)){
        document.getElementById('dev_result').innerHTML = '<span style="color:red">Incorrect value</span>';
    }

    const n1 = document.getElementById('n1').valueAsNumber;
    const n2 = document.getElementById('n2').valueAsNumber;
    const min = n1 < n2 ? n1 : n2;
    let devRez = 1;

    for(let i = 1; i <= min; i++){
        if(n1 % i === 0 && n2 % i === 0){
            devRez = i;
        }
    }

    document.getElementById('dev_result').innerHTML = `Спільний дільник ваших чисел є ${devRez}`;
}

function task5() {
    const anyNum = document.getElementById('anyNum').value;
    let allDevRez = '';

    for (let i = 1; i <= anyNum; i++) {
        if (anyNum % i === 0) {
            allDevRez += i + ' ';
        }
    }

    document.getElementById('all_dev_result').innerHTML = `Всі дільники вашого числа: ${allDevRez}`;
}

function task6() {
    const randomNumber = document.getElementById('randomNumber').value;

    if (isNaN(randomNumber) || randomNumber.length !== 5) {
        document.getElementById('polindrom_result').innerHTML = '<span style="color:red">Incorrect value</span>';
        return;
    }

    const firstNumber = Math.floor(randomNumber / 10000);
    const secondNumber = Math.floor((randomNumber % 10000) / 1000);
    const beforLastNumber = Math.floor((randomNumber / 10) % 10);
    const lastNumber = randomNumber % 10;

    if (firstNumber === lastNumber && secondNumber === beforLastNumber) {
        document.getElementById('polindrom_result').innerHTML = `Ваше число є паліндромом`;
    } else {
        document.getElementById('polindrom_result').innerHTML = `Ваше число НЕ є паліндромом`;
    }
}


function task7() {
    const amount = document.getElementById('amount').valueAsNumber;
    let total = 0;

    if(200 <= amount && amount < 300){
        total = amount - (amount * 0.03);
    } else if (300 <= amount && amount < 500){
        total = amount - (amount * 0.05);
    } else if(amount >= 500){
        total = amount - (amount * 0.07);
    } else {
        total = amount;
    }

    document.getElementById('total').innerHTML = `Сума до сплати зі знижкою: ${total.toFixed(2)}грн`;
}

function task8() {
    let userInput;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < 10; i++) {
        userInput = parseInt(prompt(`Введіть число ${i + 1}:`));

        if (isNaN(userInput)) {
            alert('Будь ласка, введіть число.');
            i--;
            continue;
        }

        if (userInput > 0) {
            positiveCount++;
        } else if (userInput < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }

        if (userInput % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    alert (`Ви ввели ${positiveCount} додатних чисел, ${negativeCount} від'ємних чисел, ${evenCount} парних і ${oddCount} непарних, а також ${zeroCount} нулів`);
}

// function task9() {
//     let today = new Date();
//     let dayOfWeek = today.getDay();
//     let currentDay;

//     switch (dayOfWeek){
//         case 0:
//             currentDay = "Неділя";
//             break;
//         case 1:
//             currentDay = "Понеділок";
//             break;
//         case 2:
//             currentDay = "Вівторок";
//             break;
//         case 3:
//             currentDay = "Середа";
//             break;
//         case 4:
//             currentDay = "Четвер";
//             break;
//         case 5:
//             currentDay = "П'ятниця";
//             break;
//         case 6:
//             currentDay = "Субота";
//             break;
//     }
    
//     while (confirm(`Сьогодні ${currentDay}. Хочеш побачити наступний день?`)) {
//         currentDay = (currentDay + 1) % 7
//     }
  
// }

function task9() {
    let today = new Date();
    let dayOfWeek = today.getDay();
    let daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    let currentDay = daysOfWeek[dayOfWeek];

    while (confirm(`${currentDay}. Хочеш побачити наступний день?`)) {
        dayOfWeek = (dayOfWeek + 1) % 7;
        currentDay = daysOfWeek[dayOfWeek];
    }
}


function task10() {
    alert ("Загадайте будь-яке ціле число від 0 до 100");

    let minNum = 0;
    let maxNum = 100;
    let userNum = '';

    while (userNum !== '=='){
        let gessNum = parseInt((minNum + maxNum) / 2);
        userNum = prompt(`Ваше число > ${gessNum}, < ${gessNum}, або == ${gessNum}?`);

        if (userNum === '>'){
            minNum = gessNum + 1;
        } else if (userNum === '<'){
            maxNum = gessNum - 1;
        } else if (userNum !== '==' && userNum !== '<' && userNum !== '>'){
            alert ('Ви ввели невірне значення');
        };

        if (minNum > maxNum) {
            alert("Ви ввели неправильні відповіді. Завершення гри.");
            break;
        }
    }

    if (userNum = '=='){
        alert (`Ваше число ${parseInt((minNum + maxNum) / 2)}!`)
    }   
}

function task11() {
    let multy = '';
    for(let i = 2; i <= 9; i++){
        multy += '<ul>';
        for(let y = 1; y <= 10; y++){
            multy += `<li>${i} * ${y} = ${i*y}</li>`;
        }
        multy += '</ul>';
    }
    document.getElementById('multy_table').innerHTML = multy;
}

function task12() {
}
