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
let appData= {
    budget=money,
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







