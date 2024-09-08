// Make each section of the resume editable on click
function makeSectionEditable(sectionClass: string) {
    const section = document.querySelector(sectionClass);
    if (section) {
        section.setAttribute("contenteditable", "true");

        // Add a listener to save changes when user clicks away (blur event)
        section.addEventListener('blur', () => {
            section.removeAttribute("contenteditable");
            saveChanges(sectionClass, section.textContent || "");
        });
    }
}

// Example: Make 'Experience' editable
document.querySelector('.experience')?.addEventListener('click', () => {
    makeSectionEditable('.experience');
});
function saveChanges(sectionClass: string, newContent: string) {
    // Depending on the section, update the respective fields in your data structure or directly in the DOM
    if (sectionClass === '.experience') {
        const experienceElement = document.querySelector('.User_Experience');
        if (experienceElement) {
            experienceElement.textContent = newContent;
        }
    }
    // Repeat for other sections like education, skills, certifications, etc.
}




// Similarly, add for education, skills, etc.
