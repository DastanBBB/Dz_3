// Задание №1
// function findMinimum(num1, num2) {
//     if (num1 < num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }
// console.log(findMinimum(25, 10));
// console.log(findMinimum(2, 11));


// Задание №2
// const getStringLength = str => str.length;
// const userInput = prompt("Введите параметр:");
// console.log(`Длина строки: ${getStringLength(userInput)}`);


// Задание №3
const calculator = function (num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            return "Делить на ноль нельзя!";
        } else {
            return num1 / num2;
        }
    } else {
        return "Некорректно написали!";
    }
};

const number1 = parseFloat(prompt("Введите первое число:"));
const number2 = parseFloat(prompt("Введите второе число:"));
const operation = prompt("Выберите операцию (+, -, *, /):");

const result = calculator(number1, number2, operation);
alert(`Результат: ${result}`);