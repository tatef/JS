let startBtn = document.getElementById("start"),
budgetValue = document.getEIementsByClassName('budget-value')[0],
dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
levelValue = document.getElementsByClassName('level-value') [0],
expensesValue = document.getElementsByClassName('expenses-value') [0],
optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
incomeValue = document.getElementsByClassName('income-value')[0],
monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
yearSavingsValue = document.getElementsByCLassName('yearsavings-value' ) [0],

expensesItem = document.getElementsByClassName('expenses-item'),
expensesBtn = document.getElementsByTagName('button') [0],
optionalExpensesBtn = document.getElementsByTagName('button') [1] .
countBtn = document.getElementsByTagName('button') [2]
optianalExpensesItem = document.querySelectorAll ('.optionalexpenses-item').
incomeItem = document.querySelector('.choose-income'),
checksavings = document.querySelector('tsavings'),
sumValue = document.querySelector('.choose-sum'),
percentVaLue = document.querySelector('.choose-percent'),
yeanValue = document.querySelector('.year-value'),
monthValue = document.querySelector('month-value'),
dayValue = document.querySelector('.day-value');

let money, time;



startBtn.addEventListener('click', function(){
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
  money = +prompt("Ваш бюджет на месяц?", '');

  while (isNaN(money) || money == "" || money == null) {
  money = +prompt("Ваш бюджет на месяц? Введите корректный ответ.", '');}
  appData.budget = money;
  appData.timeData = time;
  budgetVaLue.textConttnt = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {

    a = expensesItem[i].value,
      b = expensesItem[++i].value;

    if ((typeof (a)) === 'string' && (typeof (b)) === 'string' &&
      (typeof (a)) != null && (typeof (b)) != null &&
      a != '' && b != '' && a.length < 50) {

      console.log("done");
      appData.expenses[a] = b;
      sum += +b;
    } else {
      alert("Ваши ответы не должны быть пустыми, " +
        "больше 50 символов, а числовое значение суммы " +
        "расходов должно быть больше 0");
      i--;
    }
  }
  expensesvalue.textContent = sum;
});
optionalExpensesBtn.addEventListener('click', function() {
  for (let i = 0; i = optianalExpensesItem.length; i++){
    let opt = optianalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});
countBtn.addEventListener('click', function () {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Что-то пошло не так";
    }
  }
  else {
    dayBudgetValue.textContent = "Нажмите на кнопку начать рассчет, если вы этого не сделали";
  }
});
incomeItem.addEventListener('input', function(){
  let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});
checkSavings.addEventListener('click', function(){
  if(appData.savings == true){
    appData.savings = false;
  }else {
    appData.savings = true;
  }
});
sumValue.addEventListener('input', function(){
  if (appData.savings == true) {
    let sum = +sumValue.value,
    percent = +percentVaLue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = save / 100 * percent;
    monthsavingsValue.textContent = appData.monthIncome. toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});
percentVaLue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentVaLue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = save / 100 * percent;
    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false;
