'use strict';

let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    
    while (isNaN(money) || money == "" || money == null) {
        alert("Неподходящее значение бюджета, введите еще раз");
        money = +prompt("Ваш бюджет на месяц?");
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
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let expenses_item_key = prompt("Введите обязательную статью расходов в этом месяце");
            let expenses_item_value = prompt("Во сколько обойдется?");
            
            if ( (typeof(expenses_item_key)) === 'string' && (typeof(expenses_item_key)) != null 
                && (typeof(expenses_item_value)) != null && expenses_item_key != '' 
                && expenses_item_key.length < 50 && !isNaN(+expenses_item_value)) {
                
                console.log("Input " + expenses_item_key + " = " + expenses_item_value);
                appData.expenses[expenses_item_key] = expenses_item_value;
            }
            else {
                alert("Введено некорректное значение, попробуйте ещё раз");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Ежедневный бюджет - " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?");
            let percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let opt_expenses = +prompt("Статья необязательных расходов?");
    
            if (isNaN(opt_expenses) == true || opt_expenses == '') {
                alert("Введено неверное значение, попробуйте ещё раз");
                i--;
            } else {
                appData.optionalExpenses[i + 1] = opt_expenses;
                console.log(appData.optionalExpenses);
            }
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');

        if ((typeof(items) === 'string') && (items != '') && (items != null)) {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что то еще?'));
            appData.income.sort();
        } else {
            alert('Введены некорректное значение, попробуйте ещё раз');
            this.chooseIncome();
        }

        let message = 'Способы доп. заработка:\r\n';

        appData.income.forEach(function(val, indx, incomes) {
            message = message + (indx + 1) + ' - ' + val + '\r\n';
        })

        alert(message);
    }
};

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log(key + ': ' + appData[key]);
}