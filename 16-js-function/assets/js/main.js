// Task 2
// function countArguments () {
//     const arg = document.getElementById('arg').value;
//     document.getElementById('sum_arg').innerHTML = arg.length;
// }




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



function task5() {

}

function task6() {

}

function task7() {

}

function task8() {

}