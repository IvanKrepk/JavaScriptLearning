document.addEventListener('DOMContentLoaded', function() {

    //#region CSS-JS Style
    let customSelects = document.querySelectorAll(".css-js-custom-select");
    
    customSelects.forEach(customSelect => {
        let selectButton = customSelect.querySelector(".select-button");
        let dropDown = customSelect.querySelector(".select-dropdown");
        let selectedValue = customSelect.querySelector(".selected-value");
        let options = dropDown.querySelectorAll("li");
        
        const toggleDropdown = (expand = null) => {
            const isOpen =
                expand !== null ? expand : dropDown.classList.contains("hidden");
            dropDown.classList.toggle("hidden", !isOpen);
            selectButton.setAttribute("aria-expanded", isOpen);
        };

        const handleOptionsSelect = (option) => {
            options.forEach((opt) => opt.classList.remove("selected"));
            option.classList.add("selected");
            selectedValue.textContent = option.textContent;
        };

        selectButton.addEventListener("click", () => {
            toggleDropdown();
        });

        options.forEach(option => option.addEventListener("click", () => {
            handleOptionsSelect(option);
            toggleDropdown(false);
        }));
    });
    //#endregion

    //#region My Dropbox

    let elsyDropdowns = document.querySelectorAll(".elsy-dropdown");
    elsyDropdowns.forEach(elsyDropDown => {
        let elsyDropDownSelected = elsyDropDown.querySelector(".dropdown-current");
        let elsyDropDownButton = elsyDropDown.querySelector("button");
        let elsyDropDownArrow = elsyDropDownButton.querySelector(".dropdown-arrow");
        let elsyDropDownList = elsyDropDown.querySelector(".dropdown-list");
        let elsyDropDownListItems = elsyDropDownList.querySelectorAll("li");

        const decorateDropDownBorders = () => {
            elsyDropDownListItems[0].style.borderTopLeftRadius = "5px";
            if (elsyDropDownList.scrollHeight <= elsyDropDownList.clientHeight) {
                elsyDropDownListItems[0].style.borderTopRightRadius = "5px";
            } else {
                elsyDropDownListItems[0].style.borderTopRightRadius = "0px";
            }
            elsyDropDownListItems[0].style.marginTop = 0;

            elsyDropDownListItems[elsyDropDownListItems.length - 1].style.borderBottomLeftRadius = "5px";
            if (elsyDropDownList.scrollHeight <= elsyDropDownList.clientHeight) {
                elsyDropDownListItems[elsyDropDownListItems.length - 1].style.borderBottomRightRadius = "5px";
            } else {
                elsyDropDownListItems[elsyDropDownListItems.length - 1].style.borderBottomRightRadius = "0px";    
            }
            elsyDropDownListItems[elsyDropDownListItems.length - 1].style.marginBottom = 0;

            if (elsyDropDownList.classList.contains("dropdown-hidden")) {
                elsyDropDownButton.style.borderBottomLeftRadius = "5px";
                elsyDropDownButton.style.borderBottomRightRadius = "5px";

            } else {
                elsyDropDownButton.style.borderBottom = "none";
                elsyDropDownButton.style.borderBottomLeftRadius = "0px";
                elsyDropDownButton.style.borderBottomRightRadius = "0px";    
            }
        };

        const toggleArrow = () => {
            if (elsyDropDownList.classList.contains("dropdown-hidden")) {
                elsyDropDownArrow.style.borderRight = "var(--arrow-size) solid transparent";
                elsyDropDownArrow.style.borderLeft = "var(--arrow-size) solid transparent";
                elsyDropDownArrow.style.borderTop = "var(--arrow-size) solid black";
                elsyDropDownArrow.style.borderBottom = "none";
            } else {
                elsyDropDownArrow.style.borderRight = "var(--arrow-size) solid transparent";
                elsyDropDownArrow.style.borderLeft = "var(--arrow-size) solid transparent";
                elsyDropDownArrow.style.borderTop = "none";
                elsyDropDownArrow.style.borderBottom = "var(--arrow-size) solid black";
            }
        };

        const toggleDropdown = (toHide = null) => {
            (toHide == null) ? elsyDropDownList.classList.toggle("dropdown-hidden") : 
                elsyDropDownList.classList.toggle("dropdown-hidden", toHide);

            toggleArrow();
            decorateDropDownBorders();
        };

        decorateDropDownBorders();

        elsyDropDownButton.addEventListener("click", () => {
            toggleDropdown();
        });

        elsyDropDownButton.addEventListener("blur", () => {
            setTimeout(() => { 
                toggleDropdown(true); 
            }, 150);
        });

        elsyDropDownListItems.forEach(item => {
            item.addEventListener("click", () => {
                elsyDropDownSelected.textContent = item.textContent;
                elsyDropDownButton.focus();
            })
        });
    });

    //#endregion
});