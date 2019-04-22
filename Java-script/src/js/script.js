'use strict';
let money = +prompt("Ваш бюджет на месяц? Вводить только число.");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let timeData = time;


let answerone = prompt("Введите обязательную статью расходов в этом месяце");
let answertwo = prompt("Во сколько обойдется?"); 

let expenses = {
    "Ответ на первый вопрос":answerone,
    "Ответ на второй вопрос":answertwo
};

let optionalExpenses;
let income;
let savings = false;

var appData = {
    money, 
    timeData,
    expenses,
    optionalExpenses,
    income,
    savings  
}

let budget = money/30;

console.log("Бюджет:", appData.money);
console.log("Данные времени:", appData.timeData);
console.log("Объект с обязательными расходами:", appData.expenses);
console.log("Объект с необязательными расходами:", appData.optionalExpenses);
console.log("Массив данных с доп. доходом:", appData.income);
console.log("Свойство savings:", appData.savings);
console.log("Ваш бюджет на 1 день :", budget);
