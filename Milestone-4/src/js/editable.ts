// Make each section of the resume editable on click
function makeSectionEditable(sectionClass: string) {
    const section = document.querySelector(sectionClass);
    if (section) {
        section.setAttribute("contenteditable", "true");

        // Add a listener to save changes when the user clicks away (blur event)
        section.addEventListener('blur', () => {
            section.removeAttribute("contenteditable");
            saveChanges(sectionClass, section.textContent || "");
        });
    }
}

// Example: Make 'Experience', 'Certification', 'Education', etc. editable
const sections = [".experience", ".certification", ".education", ".languages", ".skills", ".contact-info", ".user_info", ".about"];
sections.forEach((section) => {
    document.querySelector(`${section}`)?.addEventListener('click', () => {
        makeSectionEditable(`${section}`);
    });
});

// Save changes function for different sections
function saveChanges(sectionClass: string, newContent: string) {
    switch (sectionClass) {
        case '.experience':
            const experienceElement = document.querySelector('.User_Experience');
            if (experienceElement) {
                experienceElement.textContent = newContent;
            }
            break;

        case '.certification':
            const certificationElement = document.querySelector('.User_Certifications');
            if (certificationElement) {
                certificationElement.textContent = newContent;
            }
            break;

        case '.education':
            const educationElement = document.querySelector('.User_Education');
            if (educationElement) {
                educationElement.textContent = newContent;
            }
            break;

        case '.languages':
            const languagesElement = document.querySelector('.User_Languages');
            if (languagesElement) {
                languagesElement.textContent = newContent;
            }
            break;

        case '.skills':
            const skillsElement = document.querySelector('.User_Skills');
            if (skillsElement) {
                skillsElement.textContent = newContent;
            }
            break;

        case '.contact-info':
            const contactInfoElement = document.querySelector('.User_Contact_Info');
            if (contactInfoElement) {
                contactInfoElement.textContent = newContent;
            }
            break;

        case '.user_info':
            const userInfoElement = document.querySelector('.User_Info');
            if (userInfoElement) {
                userInfoElement.textContent = newContent;
            }
            break;

        case '.about':
            const aboutElement = document.querySelector('.User_About');
            if (aboutElement) {
                aboutElement.textContent = newContent;
            }
            break;

        default:
            console.log(`Unknown section: ${sectionClass}`);
            break;
    }
}
