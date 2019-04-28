'use strict';

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log("Свойство " + key + " имеет значение " + options[key]);
// }

// console.log(Object.keys(options).length);
/* Object - это значит, что мы будем работать с его обьетом, а keys - что будем
работать с его ключами(width, name...), которые у нас тут есть, а length считает количество свойств
Покажет 4*/

// let arr = ["first", 2, 3, "four", 5];
// arr[99] = 99;
// console.log(arr.length);
// Так как в массиве всего 6 элементов, но есть пробел, то длина = 100
// из-за того, что пробел - тоже элемент
// console.log(arr);

/* arr.pop();
// Удаляет последний элемент массива
arr.push("5");
// Добавляет новый элемент массива в конец
arr.shift();
// Удаляет первый элемент массива
arr.unshift("1");
// Добавляет новый элемент массива в начало */

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = ["first", 2, 3, "four", 5];

// arr.forEach(function(item, i, mass) {
//     console.log(i + ": " + item + " (массив : " + mass + ")");
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key in mass) {
//     console.log(key);
// }
// in - если надо получить значение
// for (let key of mass) {
//     console.log(key);
// }

// let answer = prompt("", ""),
//     arr = [];

// arr = answer.split(",");
// console.log(arr);
// Получается, все, что пользователь введет через запятую, станет отдельным 
// элементом массива

// let arr = ["sad", "sds", "asdad", "ds"],
//     i = arr.join(", ");
//     console.log(i);
// Так мы выводим строки через запятую, вместо массива


// let arr = ["1", "15", "4"],
//     i = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a-b;
// }

// Этот метод позволяет сортировать по первому значению элементов

// console.log(arr);

// let soldier = {
//     health: 400,
//     armor: 100
// };

// let john = {
//     health: 100
// };

// john.__proto__ = soldier;
//  джон, в этом случае - потомок прототипа солдата, так как броню мы не 
// указывали, то броня ищется уже у прототипа, а она равно 100

// console.log(john);
// console.log(john.armor);



let money, time, a, b;



function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц? Введите корректный ответ.", '');
  }
}
start();



let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {

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
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (money / 30).toFixed();
    alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);
    console.log(appData);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Что-то пошло не так")
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 4; i++) {
      while (isNaN(i) || i == "" || i == null)
      appData.optionalExpenses[i] =
        prompt("Статья необязательных расходов?");
    }
  },
  // Теперь эти функции хранятся в виде методов обьекта appData
  chooseIncome: function () {
    for (let i = 0; i < 1; i++) {
      let items = prompt("Что принесет дополнительный доход?" +
        "(Перечислите через запятую)", "");

      if (!isNaN(items) || items === null || items == "" || items == null) {
        alert("Аргумент передан не как строка");
        i--;
      } else {
        appData.income = items.split(", ");
      }
    }
    for (let i = 0; i < 1; i++) {
      let others = prompt("Может что-то еще? (только одно)", "");

      if (!isNaN(others) || others === null || others == "" || others == null) {
        alert("Аргумент передан не как строка");
        i--;

      } else {

        others = others.split(", ").map(function (elem, i, arr) {
          appData.income.push(elem);
        });

      }

    }
    appData.income.sort();

    appData.income.forEach(function (item, i) {
      alert("Способы доп. заработка: " + (i + 1) + " - " + item);
    });
  },

  showAll: function () {
    for (let key in appData) {
      console.log("Свойство " + key);
    }
  },

  init: function () {
    appData.chooseExpenses();
    appData.detectDayBudget();
    appData.detectLevel();
    appData.checkSavings();
    appData.chooseOptExpenses();
    appData.chooseIncome();
    appData.showAll();
  }
};

appData.init();
