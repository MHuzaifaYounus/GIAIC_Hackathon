"use strict";
var _a;
// Make each section of the resume editable on click
function makeSectionEditable(sectionClass) {
    const section = document.querySelector(sectionClass);
    if (section) {
        section.setAttribute("contenteditable", "true");
        // Add a listener to save changes when the user clicks away (blur event)
        section.addEventListener('blur', () => {
            section.removeAttribute("contenteditable");
            saveChanges(sectionClass, section.innerHTML || "");
        });
    }
}
// Example: Make 'Experience', 'Certification', 'Education', etc. editable
const sections = [".experience", ".certification", ".education", ".languages", ".skills", ".contact-info", ".user_info", ".User_About"];
sections.forEach((section) => {
    var _a;
    (_a = document.querySelector(`${section}`)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        makeSectionEditable(`${section}`);
    });
});
// Save changes function for different sections
function saveChanges(sectionClass, newContent) {
    switch (sectionClass) {
        case '.experience':
            const experienceElement = document.querySelector('.User_Experience');
            if (experienceElement) {
                experienceElement.innerHTML = newContent;
            }
            break;
        case '.certification':
            const certificationElement = document.querySelector('.User_Certifications');
            if (certificationElement) {
                certificationElement.innerHTML = newContent;
            }
            break;
        case '.education':
            const educationElement = document.querySelector('.User_Education');
            if (educationElement) {
                educationElement.innerHTML = newContent;
            }
            break;
        case '.languages':
            const languagesElement = document.querySelector('.User_Languages');
            if (languagesElement) {
                languagesElement.innerHTML = newContent;
            }
            break;
        case '.skills':
            const skillsElement = document.querySelector('.User_Skills');
            if (skillsElement) {
                skillsElement.innerHTML = newContent;
            }
            break;
        case '.contact-info':
            const contactInfoElement = document.querySelector('.User_Contact_Info');
            if (contactInfoElement) {
                contactInfoElement.innerHTML = newContent;
            }
            break;
        case '.user_info':
            const userInfoElement = document.querySelector('.User_Info');
            if (userInfoElement) {
                userInfoElement.innerHTML = newContent;
            }
            break;
        case '.User_About':
            const aboutElement = document.querySelector('.User_About');
            if (aboutElement) {
                aboutElement.innerHTML = newContent;
            }
            break;
        default:
            console.log(`Unknown section: ${sectionClass}`);
            break;
    }
}
// Make individual skill items editable
function makeSkillItemsEditable() {
    const skillItems = document.querySelectorAll('.User_Skills li');
    skillItems.forEach((item) => {
        item.setAttribute("contenteditable", "true");
        // Save changes when user clicks away
        item.addEventListener('blur', () => {
            var _a;
            item.removeAttribute("contenteditable");
            saveChanges('.skills', ((_a = document.querySelector('.User_Skills')) === null || _a === void 0 ? void 0 : _a.innerHTML) || "");
        });
    });
}
// Apply editable functionality to skills on click
(_a = document.querySelector('.skills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    makeSkillItemsEditable();
});
