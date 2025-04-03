// Переставить второй и третий пункты
let elements = document.querySelectorAll('.menu-item');
let thierdElement = elements[1];
let secondElement = elements[2];
let menu = document.querySelector('.menu');
menu.insertBefore(secondElement, thierdElement)

// Добавить пятый пункт
let fifthElement = document.createElement('li');
fifthElement.classList.add('menu-item');
fifthElement.textContent = 'Пятый пункт';
menu.append(fifthElement);

// Поменять фон
document.body.style.background = 'url(../img/apple_true.jpg)'

// Поменять заголовок
let title = document.querySelector('#title');
title.textContent = 'Мы продаем только подлинную технику Apple';

// Удалить рекламу
let marketing = document.querySelector('.adv');
let marketingParent = marketing.parentElement;
marketingParent.removeChild(marketing);

// Спросить у пользователя
let feedback = prompt('Напишите ваше отношение к технике Apple');
let promptElement = document.querySelector('#prompt');
promptElement.textContent = feedback;