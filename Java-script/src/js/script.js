'use strict';

let money = +prompt("Ваш бюджет на месяц? Вводить только число."),
time = prompt("Введите дату в формате YYYY-MM-DD"),
answerOne = prompt("Введите обязательную статью расходов в этом месяце"),
answerTwo = prompt("Во сколько обойдется?"),
answerThree = prompt("Введите обязательную статью расходов в этом месяце"),
answerFour = prompt("Во сколько обойдется?"),
appData = {
    budget : money,
        timeData : time,
        expenses : {
            [answerOne]: answerTwo,
            [answerThree]: answerFour
        },
        optionalExpenses : {},
        income :[],
        savings : false,
},
budget = money/30;

console.log("Бюджет:", appData);
console.log("Ваш бюджет на 1 день :", budget);
