'use strict'

// Получить кнопку "Начать расчет" через id
let btnStart = document.querySelector('#start');

// Получить все блоки в правой части программы через классы
let txtBudgetValue = document.querySelector('.budget-value');
let txtDayBudgetValue = document.querySelector('.daybudget-value');
let txtLevelValue = document.querySelector('.level-value');
let txtExpensesValue = document.querySelector('.expenses-value');
let txtOptionalExpensesValue = document.querySelector('.optionalexpenses-value');
let txtIncomeValue = document.querySelector('.income-value');
let txtMonthSavingsValue = document.querySelector('.monthsavings-value');
let txtYearSavingsValue = document.querySelector('.yearsavings-value');

// Получить поля (input) c обязательными расходами через класс (class=”expenses-item”)
let arrExpensesItems = document.querySelectorAll('.expenses-item');

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
let buttons = document.getElementsByTagName('button');
let btnExpensesItem = buttons[0];
let btnOptionalExpenses = buttons[1];
let btnCountBudget = buttons[2];
btnExpensesItem.disabled = true;
btnOptionalExpenses.disabled = true;
btnCountBudget.disabled = true;

// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let arrOptionalExpenses = document.querySelectorAll('.optionalexpenses-item');

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let txtChooseIncome = document.querySelector('#income');
let cbxSavings = document.querySelector('#savings');
let txtSum = document.querySelector('#sum');
let txtPercent = document.querySelector('#percent');
let txtYearValue = document.querySelector('.year-value');
let txtMonthValue = document.querySelector('.month-value');
let txtDayValue = document.querySelector('.day-value');

// Предыдущий код
let money;
let time;

btnStart.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == "" || money == null) {
        alert("Неподходящее значение бюджета, введите еще раз");
        money = +prompt("Ваш бюджет на месяц?");
    }

    appData.budget = money;
    appData.timeData = time;
    
    txtBudgetValue.textContent = money.toFixed();

    txtYearValue.value = new Date(Date.parse(time)).getFullYear();
    txtMonthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    txtDayValue.value = new Date(Date.parse(time)).getDay();

    btnExpensesItem.disabled = false;
    btnOptionalExpenses.disabled = false;
    btnCountBudget.disabled = false;
});

btnExpensesItem.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < arrExpensesItems.length; i++) {
        let expenses_item_key = arrExpensesItems[i].value;
        let expenses_item_value = arrExpensesItems[++i].value;
        
        if ( (typeof(expenses_item_key)) === 'string' && (typeof(expenses_item_key)) != null 
            && (typeof(expenses_item_value)) != null && expenses_item_key != '' 
            && expenses_item_key.length < 50 && !isNaN(+expenses_item_value)) {
            
            console.log("Input " + expenses_item_key + " = " + expenses_item_value);
            appData.expenses[expenses_item_key] = expenses_item_value;
            sum += +expenses_item_value;
        }
        else {
            alert("Введено некорректное значение, попробуйте ещё раз");
            i--;
        }
    }
    txtExpensesValue.textContent = sum;
});

btnOptionalExpenses.addEventListener('click', function() {    
    for (let i = 0; i < arrOptionalExpenses.length; i++) {
        let opt_expenses = +arrOptionalExpenses[i].value;

        if (isNaN(opt_expenses) == true || opt_expenses == '') {
            alert("Введено неверное значение, попробуйте ещё раз");
            i--;
        } else {
            appData.optionalExpenses[i] = opt_expenses;
            txtOptionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
            console.log(appData.optionalExpenses);
        }
    }
});

btnCountBudget.addEventListener('click', function() {

    let expenses = 0;
    for (let expense in appData.expenses) {
        expenses += +appData.expenses[expense];
    }

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - expenses) / 30).toFixed(2);
        txtDayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            txtLevelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            txtLevelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            txtLevelValue.textContent = "Высокий уровень достатка";
        } else {
            txtLevelValue.textContent = "Произошла ошибка";
        }
    } else {
        txtDayBudgetValue.textContent = "Произошла ошибка"
    }
});

txtChooseIncome.addEventListener('input', function() {
    let items = txtChooseIncome.value;

    if ((typeof(items) === 'string') && (items != '') && (items != null)) {
        appData.income = items.split(', ');

        appData.income.sort();
    }
    txtIncomeValue.textContent = appData.income;
});

cbxSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

txtSum.addEventListener('input', function() {
    if (appData.checkSavings == true) {
        let sum = +txtSum.value;
        percent = + txtPercent.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        txtMonthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        txtYearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

txtPercent.addEventListener('input', function() {
    if (appData.checkSavings == true) {
        let sum = +txtSum.value;
        percent = + txtPercent.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        txtMonthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        txtYearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log(key + ': ' + appData[key]);
}
