// Неправильні імена змінних та різновиди коментарів

/* let user-name
    let 9userName
    let &userName
    let user name
    let ім'я
    let = 'name' */

// Правильні варіанти змінних
let userNames
let user_names
let $userNames
let UserNames


function task1() {
    const userName = prompt('Як вас звати?');
    alert('Привіт, ' + userName + '!');
    // alert('Привіт, ${userName}!')
}


function task2() {
    const userBirthYear = parseInt(prompt('Напишіть рік вашого народження'), 10);
    const currentYear = new Date().getFullYear();
    const userAge = currentYear - userBirthYear;
    alert(`Вам ${userAge} років`);
}

function task3() {
    const squareSide = parseFloat(prompt('Напишіть довжину сторони квадрата'));
    const perimeter = squareSide * 4;
    alert(`Периметр квадрата дорівнює ${perimeter}`);
}

function task4() {
    const rollRadius = parseFloat(prompt('Напишіть радіус кола'));
    const rollYardage = Math.PI * rollRadius * rollRadius;
    alert(`Площа окружності дорівнює ${rollYardage}`);
}

function task5() {
    const distance = parseFloat(prompt('Напишіть відстань в кілометрах'));
    const timeForDistance = parseFloat(prompt('Напишіть планований час в дорозі в годинах'));
    const speed = distance / timeForDistance;
    alert(`Вам необхідно рухатись зі швидкістю ${speed} км на годину`);
}

function task6() {
    const dollar = parseInt(prompt('Напишіть суму долларів для обміну'), 10);
    const dollar_to_euro = 0.91009;
    const euro = dollar * dollar_to_euro;
    alert(`Ви отримуєте ${euro} евро за ${dollar} долларів`);
}
