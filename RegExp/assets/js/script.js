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
let blockRegExpSample = document.querySelector(".block_reg_exp_sample");
let lblRegExpSample = blockRegExpSample.querySelector("span");
let cbFlagIndependentRegister = document.querySelector("#cbFlagIndependentRegister");
let cbFlagGlobalSearch = document.querySelector("#cbFlagGlobalSearch");

function regExpExecute() {
    textExample = txtTextInput.value;
    textRegExp = txtRegExp.value;

    let flags = "";
    if (cbFlagIndependentRegister.checked) {
        flags = flags + "i";
    }
    if (cbFlagGlobalSearch.checked) {
        flags = flags + "g";
    }

    if ((textExample != '') && (textRegExp != '')) {
        let regularExp = new RegExp(textRegExp, flags);
        result = textExample.match(regularExp);
        txtTextResult.value = result;
        console.log('text = ' + textExample + ', regexp = ' + textRegExp + ', result = ' + result); 
    } else {
        txtTextResult.value = '';
    }   
};

function setRegExpSample() {
    let sample = "/" + txtRegExp.value + "/";
    let flagI = (cbFlagIndependentRegister.checked) ? ("i") : ("");
    let flagG = (cbFlagGlobalSearch.checked) ? ("g") : ("");
    sample = sample + flagI + flagG;
    lblRegExpSample.innerHTML = sample;
}

function regExpChanged() {
    setRegExpSample();
}

txtTextInput.addEventListener('input', regExpExecute);

txtRegExp.addEventListener('input', regExpExecute);
txtRegExp.addEventListener('input', regExpChanged);
cbFlagIndependentRegister.addEventListener('click', regExpExecute);
cbFlagIndependentRegister.addEventListener('click', regExpChanged);
cbFlagGlobalSearch.addEventListener('click', regExpExecute);
cbFlagGlobalSearch.addEventListener('click', regExpChanged);

setRegExpSample();