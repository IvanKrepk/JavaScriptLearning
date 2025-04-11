// new RegExp('pattern', 'flags');
// /pattern/

// Флаги
// i - игнорирование регистров
// g - искать все вхождения
// m - многострочность

// Классы символов
//   \d - искать все цифры
//   \D - искать не цифру

//   \w - искать все буквы
//   \W - искать не буквы

//   \s - искать все пробелы
//   \S - искать не пробелы

// let answer = prompt("Введите ваше имя");
// let reg = /ex/;

// console.log('Search n ' + answer.search(/n/));
// console.log(answer.match(reg));
// console.log('replace nn to mm: ' + answer.replace(/nn/, 'mm'));

// let str = "My name is R2D2";
// console.log(str.match(/\w\d\w\d/i));  // Find 'R2D2'

let textExample = '';
let textRegExp = '';
let result = '';

let txtTextInput = document.querySelector("#txt_text_input");
let txtRegExp = document.querySelector("#txt_reg_exp");
let txtTextResult = document.querySelector("#txt_text_result")

txtTextInput.addEventListener('input', function() {
    textExample = txtTextInput.value;
    
    let regularExp = new RegExp(textRegExp, "g");
    result = textExample.match(regularExp);
    txtTextResult.value = result;
    console.log('text = ' + textExample + ', regexp = ' + textRegExp + ', result = ' + result);
});

txtRegExp.addEventListener('input', function() {
    textRegExp = txtRegExp.value;
    let regularExp = new RegExp(textRegExp);
    result = textExample.match(regularExp);
    txtTextResult.value = result;
    console.log('text = ' + textExample + ', regexp = ' + textRegExp + ', result = ' + result);
});