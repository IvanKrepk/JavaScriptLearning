'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expenses_item_key_1 = prompt("Введите обязательную статью расходов в этом месяце");
let expenses_item_value_1 = prompt("Во сколько обойдется?");
let expenses_item_key_2 = prompt("Введите обязательную статью расходов в этом месяце");
let expenses_item_value_2 = prompt("Во сколько обойдется?");

appData.expenses.expenses_item_key_1 = expenses_item_value_1;
appData.expenses.expenses_item_key_2 = expenses_item_value_2;

alert("Бюджет на 1 день - " + appData.budget / 30);