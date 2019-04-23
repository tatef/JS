'use strict';

// function showFirstMessage(text) {
//     alert(text);
//     let num = 20;
// }

// Там, где написано text после имени функции - там пишутся аргументы, над 
// которыми проводятся действия, аргументом может быть бесконечность

// showFirstMessage("Hello World!");
// Так как агрумент уже передан, то в скобки можно написать любой текст
// Если попытаться вызвать переменную num вне функции, то ничего
// не выйдет, так как ее вне функции не существует

// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     num = 10;
// }

// showFirstMessage("Hello World!");
// console.log(num);
// При такой функции, консоль выведет 10, так как
// функция обработала переменную num = 20

// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);
// теперь сначала выведется num = 10, потом num = 20
// так как это совершенно две разные переменые
/* Замыкание фунций - когда внутри функции есть обращение
к какой-либо переменной, функция сначала ищет эту переменную
внутри себя, а потом уже во внешних переменных. Замыкание - это
функция вместе со всем внешними переменными, которые ей доступны */

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(3, 4));

// console.log(calc(8, 4));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);
// с помощью команды return мы можем возвращать значение из
// функций

// function declaration - функция, которая обьявлена в потоке кода 
// они создаются до начала кода и их можно вызывать еще до обьявления
// этих функций, они будут работать

// function expiration - это когда мы функцию присваиваем в переменную,например:
//  простыми словами - это функциональное выражение и она создается
//  только тогда, когда код до нее доходит, зарание тут не получится
// но такой тип использовать не рекомендуется

// let calc = function() {
//     let num = 50;
//     return num;
// }

// let calc = (a, b) => a+b

// console.log(calc(3, 4));

// let str = "test"; 
// console.log(str.length);
// length - это свойство, оно пишется без круглых скобок в конце
// выводит длину текста

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// toUpperCase() - это уже методы, они пишутся со скобками
/* Первый метод делает все буквы заглавными, а второй наоборот
Методы и свойства у строк и чисел. Методы - вспомогательные функции, а
свойства - это впомогательные значения */

// let twelVe = "12.2";

// console.log(Math.round(twelVe)); 

// let twelVe = "12.2px";

// console.log(parseInt(twelVe)); 
// console.log(parseFloat(twelVe)); 
// переводит числа в другую систему счисления, двоичную
// десятичную и т.д. parseInt - округляет до целого числа, все, что
// после точки убирает
// parseFloat возвращает десятичное число

let money, time, a, b;

function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц? Введите корректный ответ.", '');
    /* команда isNaN возвращает true только в том случае, если туда попадают не 
    цифры - так же у нас нельзя оставлять строку пустой, либо нажимать null, то
    есть кнопку отмена. Если хоть где то будет true, то цикл буде продолжаться */
  }
}
/* Опасность еще в том, что переменные вне функции видны не будут, поэтому
делаем их глобальными и обьявляем в самом начале кода */
start();


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
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
  }
}

chooseExpenses();
/* Вызываем */
function detectDayBudget() {
  appData.moneyPerDay = (money / 30).toFixed();
  /* Используем метод toFixed, если оставим пустые скобки, то округлим
  до ближайшего целого, если 1, то до 1 знака после запятой и т.д. */
  alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);
  console.log(appData);
}

detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Что-то пошло не так")
  }
}

detectLevel();



function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
      percent = +prompt("Под какой процент?");

    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

checkSavings();

function chooseOptExpenses() {
  for (let i = 1; i < 4; i++) {
    appData.optionalExpenses[i] =
      prompt("Статья необязательных расходов?");
  }
}

chooseOptExpenses();