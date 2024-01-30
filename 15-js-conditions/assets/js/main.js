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
    if(isNaN(numb_1)){
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
}

function task7() {
}

function task8() {
}

function task9() {
}

function task10() {
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
