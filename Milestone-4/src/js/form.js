"use strict";
// Add more experience
function addExperience() {
    const experienceSection = document.getElementById('experience-section');
    const newExperience = document.createElement('div');
    newExperience.classList.add('experience-entry');
    newExperience.innerHTML = `
        <label for="experience-title">Experience Title:</label>
        <input type="text" name="experience-title[]" placeholder="Job Title/Role">

        <label for="experience-description">Description:</label>
        <textarea name="experience-description[]" rows="3" placeholder="Describe your experience"></textarea>
    `;
    experienceSection.insertBefore(newExperience, experienceSection.querySelector('.add-btn'));
}
// Add more education
function addEducation() {
    const educationSection = document.getElementById('education-section');
    const newEducation = document.createElement('div');
    newEducation.classList.add('education-entry');
    newEducation.innerHTML = `
        <label for="education-title">Education Title:</label>
        <input type="text" name="education-title[]" placeholder="Degree/Certificate">

        <label for="education-description">Description:</label>
        <textarea name="education-description[]" rows="3" placeholder="Describe your education"></textarea>
    `;
    educationSection.insertBefore(newEducation, educationSection.querySelector('.add-btn'));
}
// Add more certifications
function addCertification() {
    const certificationSection = document.getElementById('certification-section');
    const newCertification = document.createElement('div');
    newCertification.classList.add('certification-entry');
    newCertification.innerHTML = `
        <label for="certification-title">Certification Title:</label>
        <input type="text" name="certification-title[]" placeholder="Certification Title">

        <label for="certification-description">Description:</label>
        <textarea name="certification-description[]" rows="3" placeholder="Describe your certification"></textarea>
    `;
    certificationSection.insertBefore(newCertification, certificationSection.querySelector('.add-btn'));
}
// Add more languages
function addLanguage() {
    const languagesSection = document.getElementById('languages-section');
    const newLanguage = document.createElement('div');
    newLanguage.classList.add('language-entry');
    newLanguage.innerHTML = `
        <label for="language">Language:</label>
        <input type="text" name="language[]" placeholder="Enter a language">
    `;
    languagesSection.insertBefore(newLanguage, languagesSection.querySelector('.add-btn'));
}
// Add more skills
function addSkill() {
    const skillsSection = document.getElementById('skills-section');
    const newSkillEntry = document.createElement('div');
    newSkillEntry.classList.add('skill-entry');
    newSkillEntry.innerHTML = `
        <label for="skill">Skill:</label>
        <input type="text" name="skill[]" placeholder="Enter a skill">
        <label for="proficiency">Proficiency Level:</label>
        <input type="text" name="proficiency[]" placeholder="Enter proficiency level">
    `;
    skillsSection.insertBefore(newSkillEntry, skillsSection.querySelector('.add-btn'));
}
// Form submit handler to generate resume
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const profession = document.querySelector('input[name="profession"]').value;
    const aboutMe = document.querySelector('textarea[name="about"]').value;
    const experiences = [];
    document.querySelectorAll('.experience-entry').forEach(entry => {
        const company = entry.querySelector('input[name="experience-title[]"]').value;
        const description = entry.querySelector('textarea[name="experience-description[]"]').value;
        experiences.push({ company, description });
    });
    const educations = [];
    document.querySelectorAll('.education-entry').forEach(entry => {
        const institution = entry.querySelector('input[name="education-title[]"]').value;
        const description = entry.querySelector('textarea[name="education-description[]"]').value;
        educations.push({ institution, description });
    });
    const certifications = [];
    document.querySelectorAll('.certification-entry').forEach(entry => {
        const certName = entry.querySelector('input[name="certification-title[]"]').value;
        const certDescription = entry.querySelector('textarea[name="certification-description[]"]').value;
        certifications.push({ certName, certDescription });
    });
    const skills = [];
    document.querySelectorAll('.skill-entry').forEach(entry => {
        const skill = entry.querySelector('input[name="skill[]"]').value;
        const proficiency = entry.querySelector('input[name="proficiency[]"]').value;
        skills.push({ skill, proficiency });
    });
    const languages = [];
    document.querySelectorAll('.language-entry').forEach(entry => {
        const language = entry.querySelector('input[name="language[]"]').value;
        languages.push(language);
    });
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const website = document.querySelector('input[name="website"]').value;
    const formData = {
        name,
        profession,
        aboutMe,
        experiences,
        educations,
        certifications,
        skills,
        languages,
        contact: { phone, email, website }
    };
    generateResume(formData);
}
//to generat resume
function generateResume(inputData) {
    console.log('Form Data:', inputData);
    // Only show name and profession if they are provided
    if (inputData.name) {
        document.getElementsByClassName("User_Name")[0].innerHTML = inputData.name;
    }
    if (inputData.profession) {
        document.getElementsByClassName("User_Profession")[0].innerHTML = inputData.profession;
    }
    if (inputData.aboutMe) {
        document.getElementsByClassName("User_About")[0].innerHTML = inputData.aboutMe;
    }
    // Contact details: only display if provided
    if (inputData.contact.email) {
        document.getElementsByClassName("User_Email")[0].innerHTML = `
            <img class="icon" src="src/icons/email.svg" alt="icon not found"> 
            <a target="_blank" href="mailto:${inputData.contact.email}">${inputData.contact.email}</a>`;
    }
    if (inputData.contact.website) {
        document.getElementsByClassName("User_Website")[0].innerHTML = `
            <img class="icon" src="src/icons/web.svg" alt="icon not found"> 
            <a target="_blank" href="${inputData.contact.website}">${inputData.contact.website}</a>`;
    }
    if (inputData.contact.phone) {
        document.getElementsByClassName("User_Num")[0].innerHTML = `
            <img class="icon" src="src/icons/phone.svg" alt="icon not found"> ${inputData.contact.phone}`;
    }
    // Skills: only add skills section if skills are provided
    if (inputData.skills[0].skill) {
        let skillSection = document.getElementsByClassName("User_Skills")[0];
        skillSection.innerHTML = ''; // Clear existing content if any
        inputData.skills.forEach(skill => {
            const skillElement = document.createElement('li');
            skillElement.textContent = `${skill.skill}: ${skill.proficiency}`;
            skillSection.appendChild(skillElement);
        });
    }
    else if (!inputData.skills[0].skill) {
        let skills_heading = document.getElementsByClassName("skills_heading")[0];
        if (skills_heading) {
            skills_heading.style.display = "none";
        }
        let skills_section = document.getElementsByClassName("skills")[0];
        if (skills_section) {
            skills_section.style.display = "none";
        }
    }
    // Languages: only add languages section if languages are provided
    if (inputData.languages[0]) {
        let languagesSection = document.getElementsByClassName("languages")[0];
        languagesSection.innerHTML = ''; // Clear existing content if any
        inputData.languages.forEach(language => {
            const languageElement = document.createElement('p');
            languageElement.innerHTML = `<img class="icon" src="src/icons/tick.svg" alt="icon not found"> ${language}`;
            languagesSection.appendChild(languageElement);
        });
    }
    else if (!inputData.languages[0]) {
        let language_heading = document.getElementsByClassName("language_heading")[0];
        if (language_heading) {
            language_heading.style.display = "none";
        }
        let lanuguage_section = document.getElementsByClassName("languages")[0];
        if (lanuguage_section) {
            lanuguage_section.style.display = "none";
        }
    }
    // Experiences: only add experience section if experiences are provided
    if (inputData.experiences[0].company) {
        let mainExperienceSection = document.getElementsByClassName("experience")[0];
        mainExperienceSection.innerHTML = ''; // Clear existing content if any
        inputData.experiences.forEach(experience => {
            let experienceElement = createExperienceSection(experience.company, experience.description);
            mainExperienceSection.appendChild(experienceElement);
        });
    }
    else if (!inputData.experiences[0].company) {
        let experience_Section = document.getElementsByClassName("experience")[0];
        if (experience_Section) {
            experience_Section.style.display = "none";
        }
    }
    // Educations: only add education section if educations are provided
    if (inputData.educations[0].institution) {
        let mainEducationSection = document.getElementsByClassName("education")[0];
        mainEducationSection.innerHTML = ''; // Clear existing content if any
        inputData.educations.forEach(education => {
            let educationElement = createExperienceSection(education.institution, education.description);
            mainEducationSection.appendChild(educationElement);
        });
    }
    else if (!inputData.educations[0].institution) {
        let education_Section = document.getElementsByClassName("education")[0];
        if (education_Section) {
            education_Section.style.display = "none";
        }
    }
    // Certifications: only add certification section if certifications are provided
    if (inputData.certifications[0].certName) {
        let mainCertificationSection = document.getElementsByClassName("certification")[0];
        mainCertificationSection.innerHTML = ''; // Clear existing content if any
        inputData.certifications.forEach(certification => {
            let certificationElement = createExperienceSection(certification.certName, certification.certDescription);
            mainCertificationSection.appendChild(certificationElement);
        });
    }
    else if (!inputData.certifications[0].certName) {
        let certification_Section = document.getElementsByClassName("certification")[0];
        if (certification_Section) {
            certification_Section.style.display = "none";
        }
    }
    uploadProfilePicture();
    // Toggle visibility of form and resume containers
    const formContainer = document.getElementsByClassName("form-container")[0];
    const resumeContainer = document.getElementsByClassName("resume-container")[0];
    if (formContainer) {
        formContainer.style.display = "none";
    }
    if (resumeContainer) {
        resumeContainer.style.display = "flex";
    }
}
// to create sections
function createExperienceSection(educationTitle, educationDetails) {
    const container = document.createElement('div');
    container.className = 'collapse-container';
    const collapseBtn = document.createElement('button');
    collapseBtn.className = 'collapse-btn';
    collapseBtn.textContent = '+';
    const heading = document.createElement('h4');
    heading.textContent = educationTitle;
    const collapseDetails = document.createElement('div');
    collapseDetails.className = 'collapse-details';
    collapseDetails.style.display = 'none';
    const paragraph = document.createElement('p');
    paragraph.textContent = educationDetails;
    collapseDetails.appendChild(paragraph);
    container.appendChild(collapseBtn);
    container.appendChild(heading);
    container.appendChild(collapseDetails);
    collapseBtn.addEventListener('click', () => {
        if (collapseDetails.style.display === 'none') {
            collapseDetails.style.display = 'block';
            collapseBtn.textContent = '-';
        }
        else {
            collapseDetails.style.display = 'none';
            collapseBtn.textContent = '+';
        }
    });
    return container;
}
function uploadProfilePicture() {
    const fileInput = document.getElementById('profile-picture');
    if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        // Create a FileReader to read the file
        const reader = new FileReader();
        reader.onload = (event) => {
            var _a;
            // Create an image element to display the profile picture
            const image = document.createElement('img');
            image.src = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            image.alt = 'Profile Picture';
            // Add the image to the DOM or display it in a specific section
            const pictureSection = document.getElementById('profile_img_box');
            if (pictureSection) {
                pictureSection.appendChild(image);
            }
        };
        // Read the file as a data URL
        reader.readAsDataURL(file);
    }
    else {
        alert('Please select a file to upload.');
    }
}