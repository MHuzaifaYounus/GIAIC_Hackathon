var collapseButtons = document.querySelectorAll('.collapse-btn');
collapseButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var _a;
        var educationDetails = (_a = button.nextElementSibling) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
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
