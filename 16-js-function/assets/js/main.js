// Task 2
// function countArguments () {
//     const arg = document.getElementById('arg').value;
//     document.getElementById('sum_arg').innerHTML = arg.length;
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

}

// Task 7
function task7() {

}

// Task 8
function task8() {

}