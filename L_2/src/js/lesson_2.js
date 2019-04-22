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
  console.log("Что-то пошло не так");
}