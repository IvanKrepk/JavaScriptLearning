'use strict';

$('input[id="fieldDate"]').daterangepicker({locale: {
    "format": "YYYY/MM/DD",
    "separator": " - ",
    "applyLabel": "Сохранить",
    "cancelLabel": "Назад",
    "daysOfWeek": [
        "Вс",
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб"
    ],
    "monthNames": [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ]
}});

let fieldDate = document.querySelector("#fieldDate");
fieldDate.addEventListener("click", function(event) {
    console.log("Вызываем DateRangePicker");
});