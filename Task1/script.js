'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let required_expense_item;
let required_expense_item_value;

let appData = {
    budget: money,
    expenses: {
        required_expense_item: required_expense_item_value
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

required_expense_item = prompt("Введите обязательную статью расходов в этом месяце");
required_expense_item_value = prompt("Во сколько обойдется?");

alert("Бюджет на 1 день - " + appData.budget / 30);