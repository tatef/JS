
'use strict';

// var $ = 1; // объявили переменную с именем '$'
// var _ = 2; // переменная с именем '_'


// if (num < 49) {
//     console.log("Неверно!");
// } else if (num > 100) {
//     console.log("Много!")
// } else {
//     console.log("Верно!")
// };

// (num == 50) ? console.log("Верно!") : console.log("Неверно!");

// switch (true) {
//     case (num < 49):
//         console.log("Неверно!");
//         break;
//     case (num > 100):
//         console.log("Много!");
//         break;
//     case (num > 80):
//         console.log("Много!");
//         break;
//     case (num === 50): 
//         console.log("Верно!");
//         break;
//     default:
//         console.log("Что-то пошло не так");
//         break;
// };

// let num = 50;
// -
// while (num < 55) {
//     console.log(num); 
//     num++;
// }
// Цикл, пока num < 55, сначала проверяет на правильность, потом делает
// --------------------------------------------------------------
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);
// Такой цикл нужен только тогда, когда нужно что-то сделать и только 
// потом проверить это условие

// for (let i = 1; i < 8; i++){
// if (i == 6) {
//     break;
// }
// console.log(i);
// Будет происходить до значения 5

// if (i == 6) {
// continue;
// }
// Значение 6 пропускается с помощью continue
// console.log(i);
// }
// appData.expenses.a1 = a, Создаю новый элемент a1
// appData.expenses[a1] = a, Заменяю содержимое 

/* Контрл шифт / */
// Контрл /  


// let i=0;

// while (i < 1) {
//     a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     b = prompt("Во сколько обойдется?", '');

//     i++;

//     if ( (typeof(a))=== 'string' && (typeof(b))=== 'string' && 
//         (typeof(a)) != null && (typeof(b)) != null && 
//         a != '' && b != '' && a.length < 50) {

//             console.log("done");
//             appData.expenses.a1 = a;
//             appData.expenses.a2 = b; 
//         } else {
//             alert("Ваши ответы не должны быть пустыми, " +
//             "больше 50 символов, а числовое значение суммы " +
//             "расходов должно быть больше 0");
//             i--;
//         }
// }

// let i = 0;

// do {
//     a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     b = prompt("Во сколько обойдется?", '');

//     i++;

//     if ((typeof (a)) === 'string' && (typeof (b)) === 'string' &&
//         (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {

//             console.log("done");
//             appData.expenses.a1 = a;
//             appData.expenses.a2 = b;
//     } else {
//         alert("Ваши ответы не должны быть пустыми, " +
//         "больше 50 символов, а числовое значение суммы " +
//         "расходов должно быть больше 0");
//         i--;
//     }
// }

// while (i < 1);
let money = +prompt("Ваш бюджет на месяц?", ''),
  time = prompt("Введите дату в формате YYYY-MM-DD", ''),
  a, b;

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 1; i++) {

  a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');

  if ((typeof (a)) === 'string' && (typeof (b)) === 'string' &&
    (typeof (a)) != null && (typeof (b)) != null &&
    a != '' && b != '' && a.length < 50) {

    console.log("done");
    appData.expenses[a] = b;
  } else {
    alert("Ваши ответы не должны быть пустыми, " +
      "больше 50 символов, а числовое значение суммы " +
      "расходов должно быть больше 0");
    i--;
  }
};




appData.moneyPerDay = money / 30;
alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);
console.log(appData);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}