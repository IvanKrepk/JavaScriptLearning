'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let expenses_item_key = prompt("Введите обязательную статью расходов в этом месяце");
    let expenses_item_value = prompt("Во сколько обойдется?");
    
    if ( (typeof(expenses_item_key)) === 'string' && (typeof(expenses_item_key)) != null 
        && (typeof(expenses_item_value)) != null && expenses_item_key != '' 
        && expenses_item_key != '' && expenses_item_key.length < 50 && !isNaN(+expenses_item_value)) {
        
        console.log("Input " + expenses_item_key + " = " + expenses_item_value);
        appData.expenses[expenses_item_key] = expenses_item_value;
    }
    else {
        alert("Введено некорректное значение, попробуйте ещё раз");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет - " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}