"use strict";
let startBtn = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  optionalExpensesValue = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
  yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
  expensesItem = document.getElementsByClassName("expenses-item"),
  expensesBtn = document.getElementsByTagName("button")[0],
  optionalExpensesBtn = document.getElementsByTagName("button")[1],
  countBtn = document.getElementsByTagName("button")[2],
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  incomeItem = document.querySelector(".choose-income"),
  checkSavings = document.querySelector("#savings"),
  sumValue = document.querySelector(".choose-sum"),
  percentValue = document.querySelector(".choose-percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener("click", () => {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  expensesBtn.disabled = false;
  optionalExpensesBtn.disabled = false;
  countBtn.disabled = false;
});
expensesBtn.addEventListener("click", function () {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;
    if (
      typeof a === "string" &&
      typeof (a && b) != null &&
      (a && b) != "" &&
      a.length < 50
    ) {
      console.log("done");

      appData.expenses[a] = b;
      sum += +b;
    } else {
      console.log("bad result");
      i--;
    }
  }
  expensesValue.textContent = sum;
});
optionalExpensesBtn.addEventListener("click", () => {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

countBtn.addEventListener("click", function () {
    if(appData.budget!=undefined){
     appData.moneePerDay = (appData.budget / 30).toFixed();
     dayBudgetValue.textContent = appData.moneePerDay;
      if (appData.moneePerDay < 100) {
    levelValue.textContent = "Низкий уровень достатка.";
  } else if (appData.budget < 2000) {
    levelValue.textContent = "Средний уровень достатка.";
  } else if (appData.budgetValue > 2000) {
    levelValue.textContent = "Высокий уровень достатка.";
  } else {
    levelValue.textContent = "Ошибка";
  }
}else{
    dayBudgetValue.textContent='Произошла ошибка';
}
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько вам это обойдётся?", "");
      if (
        typeof a === "string" &&
        typeof (a && b) != null &&
        (a && b) != "" &&
        a.length < 50
      ) {
        console.log("done");

        appData.expenses[a] = b;
      } else {
        console.log("bad result");
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneePerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на один день составляет " + appData.detectDayBudget("руб "));
  },
  detectDayBudgetLvl: function () {
    if (appData.budget < 100) {
      console.log("Низкий уровень достатка.");
    } else if (appData.budget < 2000) {
      console.log("Средний уровень достатка.");
    } else if (appData.budgetValue > 2000) {
      console.log("Высокий уровень достатка.");
    } else {
      console.log("Ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход с вашего процента" + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {},
  chooseIncome: function () {
    let items = prompt("Что принесёт вам доход?(перечислите через запятую", "");

    if (typeof items != "string" || items == "" || typeof items == null) {
      console.log("Ошибка");
    } else {
      appData.income = items.split(",");
      appData.income.push(prompt("Может что-то еще?"));
      appData.income.sort();
    }
    appData.income.forEach(function (itemmassive, i) {
      alert("способы заработка", +i + 1 + "-" + itemmassive);
    });
  },
};
for (let key in appData) {
  console.log(
    "Наша программа включате в себя данные:" + key + "-" + appData[key]
  );
}
