'use strict';

let startBtn = document.getElementById('start'),
    budgetValue=document.getElementsByClassName('budget-value')[0],
    daybudgetValue=document.getElementsByClassName('daybudget-value')[0],
    levelValue=document.getElementsByClassName('level-value')[0],
    expensesValue=document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue=document.getElementsByClassName("optionalexpenses-value")[0],
    income=document.getElementsByClassName('income-value')[0],
    monthsavings=document.getElementsByClassName('montsaving-value')[0],
    yearsavings=document.getElementsByClassName('yearsavings-value')[0],

    expensesItem=document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem=document.querySelectorAll('optional-expenses-item'),
    incomeItem=document.querySelector('chose-income'),
    checkSavings=document.querySelector('check-savings'),
    sumValue=document.querySelector('.shoose-sum'), 
    percentValue=document.querySelector('.choose-percent'),
    yearValue=document.querySelector('year-value'),
    monthValue=document.querySelector('moth-value'),
    dayValue=document.querySelector('day-value');

let money,time;
function start(){
    money=+prompt("Ваш бюджет на месяц?",'');
    time=prompt("Введите дату",'');
    while(isNaN(money)||money==''|| money==null){
        money=+prompt("Ваш бюджет на месяц?",'');
    }
}
start();
let appData = {
    budget : money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:true,
    chooseExpenses: function(){
        for (let i;i<2;i++){
    
    let a = prompt('Введите обязательную статью расходов в этом месяце',''),
        b= prompt('Во сколько вам это обойдётся?',"");
    if ( typeof(a) ==='string' && typeof(a&&b)!=null && (a&&b) !='' && a.length<50){
        console.log ("done");
        
                appData.expenses[a] = b;
            } else {
                console.log ("bad result");
                i--;
            
        }
    }
},
detectDayBudget: function(){
    appData.moneePerDay=(appData.budget/30).toFixed();
    alert('Бюджет на один день составляет ' + appData.detectDayBudget("руб "));
},
detectDayBudgetLvl: function(){
    if(appData.budget<100){
    console.log('Низкий уровень достатка.');}
        else if(appData.budget<2000){
        console.log('Средний уровень достатка.');}
        else if(appData.budgetValue>2000){
            console.log('Высокий уровень достатка.');}
        else {
            console.log("Ошибка");
        }
},
checkSavings: function(){
    if (appData.savings==true){
        let save = +prompt('Какова сумма накоплений?'),
            percent= +prompt('Под какой процент?');
            appData.monthIncome=save/100/12*percent;
            alert('Доход с вашего процента'+appData.monthIncome);
    }
},
chooseOptExpenses:function(){
    for (let i; i<=3; i++){
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i]=questionOptExpenses;{
            console.log(appData.optionalExpenses);
        }
    }
},
chooseIncome:function(){
    let items=prompt("Что принесёт вам доход?(перечислите через запятую", "");

    if (typeof(items)!='string'|| items==""||typeof (items)==null){
         console.log('Ошибка');
    }
    else {
        appData.income=items.split(',');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
    }
    appData.income.forEach(function(itemmassive,i){
        alert('способы заработка',+i+1+'-'+itemmassive);
    });
}
};
for (let key in appData){
    console.log("Наша программа включате в себя данные:"+key+'-'+   appData[key]);
}



