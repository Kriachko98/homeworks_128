// Task 2
// function countArguments () {
//     const arg = document.getElementById('arg').value;
//     document.getElementById('sum_arg').innerHTML = arg.value.length;
// }

function countArguments() {
    const inputVal = document.getElementById('arg').value;
    const numOfArguments = inputVal.split(',').filter(arg => arg.trim() !== '').length;
    document.getElementById('sum_arg').innerHTML = numOfArguments;
}

// Task 3
function getValue (a, b){
    let value = '';

    if (a < b){
        value = -1;
    } else if (a > b){
        value = 1;
    } else {
        value = 0;
    }
    return value;
}

function task3() {
    const a = document.getElementById('numb_1').valueAsNumber;
    const b = document.getElementById('numb_2').valueAsNumber;

    if(isNaN(a)){
        value = '<span style="color:red">Invalid value</span>';
    } else if (isNaN(b)){
        value = '<span style="color:red">Invalid value</span>';
    } else {
        value = `${getValue(a, b)}`;
    }

    document.getElementById('value_result').innerHTML = value;
}


// Task 4
function factorial (n = 1){
    let result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

function calcFactorial (){
    const numb = document.getElementById('number').valueAsNumber;
    let result = '';

    if(isNaN(numb)){
        result = '<span style="color:red">Invalid value</span>';
    } else {
        result = `${numb}! = ${factorial(numb)}`;
    }

    document.getElementById('fact_result').innerHTML = result;
}


// Task 5
function concRez (){
    const a1 = document.getElementById('a1').value;
    const b2 = document.getElementById('b2').value;
    const c3 = document.getElementById('c3').value;
    let result = '';

    if (a1 !== '' && b2 !== '' && c3 !== '') {
        result = concatination(a1, b2, c3);
    } else {
        result = '<span style="color:red">Заповніть всі поля</span>';
    }

    document.getElementById('fullNumb').innerHTML = result;
}

let concatination = (a1, b2, c3) => a1 + b2 + c3;


// Task 6
function task6() {
    let height = document.getElementById('height').valueAsNumber;
    let width = document.getElementById('width').valueAsNumber;
    let square = calcSquare (height, width);

    document.getElementById('square_result').innerHTML = `Площа прямокутника дорівнює: ${square}`;
}

function calcSquare (height, width){
    if(isNaN(height)){
       return width * width;
    } else if (isNaN(width)){
        return height * height;
    } else {
        return height * width;
    }
}




// Task 7
function task7() {
    const anyNum = document.getElementById('perfect').valueAsNumber;
    let result = calcPerfectNum (anyNum);

    if (result === true){
        document.getElementById('isPerfect').innerHTML = `Число ${anyNum} є досконалим!`;
    } else {
        document.getElementById('isPerfect').innerHTML = `Число ${anyNum} НЕ є досконалим!`;
    }
}

function calcPerfectNum (anyNum){
    let sum = 0;
    for (let i = 1; i < anyNum; i++){
        if (anyNum % i == 0){
            sum += i;
        }
    }
    if (sum === anyNum){
        return true;
    } else {
        return false;
    }
}




// Task 8
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
    const min = document.getElementById('firstNum').valueAsNumber;
    const max = document.getElementById('secondNum').valueAsNumber;
    let from = min;
    let to = max;

    if (min > max) {
        from = max;
        to = min;
    }

    const perfectNumbersInRange = calcPerfectRange(from, to);
    document.getElementById('perfectNums').innerHTML = `В вашому диапазоні такі досконалі числа: ${perfectNumbersInRange}`;
}

function calcPerfectRange(from, to) {
    const perfectNumbers = [];

    for (let i = from; i <= to; i++) {
        let sum = 0;

        for (let k = 1; k < i; k++) {
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
