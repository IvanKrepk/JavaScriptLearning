window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tabs = this.document.querySelectorAll(".info-header-tab");
    let info = this.document.querySelector(".info-header");
    let tabContents = this.document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabContents.length; i++) {
            tabContents[i].classList.remove('show');
            tabContents[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContents[b].classList.contains("hide")) {
            tabContents[b].classList.remove("hide");
            tabContents[b].classList.add("show");
        }
    }

    info.addEventListener("click", function(event) {
        let target = event.target;

        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});