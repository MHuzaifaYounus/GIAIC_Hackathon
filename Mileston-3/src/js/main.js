"use strict";
const collapseButtons = document.querySelectorAll('.collapse-btn');
collapseButtons.forEach((button) => {
    button.addEventListener('click', () => {
        var _a;
        const educationDetails = (_a = button.nextElementSibling) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
        if (educationDetails) {
            if (educationDetails.style.display === 'block') {
                educationDetails.style.display = 'none';
                button.textContent = '+';
            }
            else {
                educationDetails.style.display = 'block';
                button.textContent = '-';
            }
        }
    });
});
