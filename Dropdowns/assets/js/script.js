document.addEventListener('DOMContentLoaded', function() {
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
});