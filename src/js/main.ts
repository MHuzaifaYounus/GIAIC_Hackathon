const collapseButtons = document.querySelectorAll<HTMLButtonElement>('.collapse-btn');

collapseButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const educationDetails = button.nextElementSibling?.nextElementSibling as HTMLElement;
        if (educationDetails) {
            if (educationDetails.style.display === 'block') {
                educationDetails.style.display = 'none';
                button.textContent = '+';
            } else {
                educationDetails.style.display = 'block';
                button.textContent = '-';
            }
        }
    });
});