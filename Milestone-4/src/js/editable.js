"use strict";
var _a;
// Make each section of the resume editable on click
function makeSectionEditable(sectionClass) {
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
(_a = document.querySelector('.experience')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    makeSectionEditable('.experience');
});
function saveChanges(sectionClass, newContent) {
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
