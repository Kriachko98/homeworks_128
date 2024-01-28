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
    let numb_1 = document.getElementById('numb_1').valueAsNumber;
    let numb_2 = document.getElementById('numb_2').valueAsNumber;
    let sum = 0;
    while (numb_1 <= numb_2) {
        sum += numb_1;
        numb_1++;
    }

    document.getElementById('sum_result').innerHTML = `Сума чисел в вашому диапазоні дорівнює ${sum}`;
}

function task4() {
}

function task5() {
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
