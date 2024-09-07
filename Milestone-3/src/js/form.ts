// Define types for the data structures
interface Experience {
    company: string;
    description: string;
}

interface Education {
    institution: string;
    description: string;
}

interface Certification {
    certName: string;
    certDescription: string;
}

interface Skill {
    skill: string;
    proficiency: string;
}

interface ResumeFormData {
    name: string;
    profession: string;
    aboutMe: string;
    experiences: Experience[];
    educations: Education[];
    certifications: Certification[];
    skills: Skill[];
    languages: string[];
    contact: {
        phone: string;
        email: string;
        website: string;
    };
}

// Add more experience
function addExperience(): void {
    const experienceSection = document.getElementById('experience-section') as HTMLElement;
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
function addEducation(): void {
    const educationSection = document.getElementById('education-section') as HTMLElement;
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
function addCertification(): void {
    const certificationSection = document.getElementById('certification-section') as HTMLElement;
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
function addLanguage(): void {
    const languagesSection = document.getElementById('languages-section') as HTMLElement;
    const newLanguage = document.createElement('div');
    newLanguage.classList.add('language-entry');

    newLanguage.innerHTML = `
        <label for="language">Language:</label>
        <input type="text" name="language[]" placeholder="Enter a language">
    `;

    languagesSection.insertBefore(newLanguage, languagesSection.querySelector('.add-btn'));
}

// Add more skills
function addSkill(): void {
    const skillsSection = document.getElementById('skills-section') as HTMLElement;

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
function handleFormSubmit(event: Event): void {
    event.preventDefault();

    const name = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
    const profession = (document.querySelector('input[name="profession"]') as HTMLInputElement).value;
    const aboutMe = (document.querySelector('textarea[name="about"]') as HTMLTextAreaElement).value;

    const experiences: Experience[] = [];
    document.querySelectorAll('.experience-entry').forEach(entry => {
        const company = (entry.querySelector('input[name="experience-title[]"]') as HTMLInputElement).value;
        const description = (entry.querySelector('textarea[name="experience-description[]"]') as HTMLTextAreaElement).value;
        experiences.push({ company, description });
    });

    const educations: Education[] = [];
    document.querySelectorAll('.education-entry').forEach(entry => {
        const institution = (entry.querySelector('input[name="education-title[]"]') as HTMLInputElement).value;
        const description = (entry.querySelector('textarea[name="education-description[]"]') as HTMLTextAreaElement).value;
        educations.push({ institution, description });
    });

    const certifications: Certification[] = [];
    document.querySelectorAll('.certification-entry').forEach(entry => {
        const certName = (entry.querySelector('input[name="certification-title[]"]') as HTMLInputElement).value;
        const certDescription = (entry.querySelector('textarea[name="certification-description[]"]') as HTMLTextAreaElement).value;
        certifications.push({ certName, certDescription });
    });

    const skills: Skill[] = [];
    document.querySelectorAll('.skill-entry').forEach(entry => {
        const skill = (entry.querySelector('input[name="skill[]"]') as HTMLInputElement).value;
        const proficiency = (entry.querySelector('input[name="proficiency[]"]') as HTMLInputElement).value;
        skills.push({ skill, proficiency });
    });

    const languages: string[] = [];
    document.querySelectorAll('.language-entry').forEach(entry => {
        const language = (entry.querySelector('input[name="language[]"]') as HTMLInputElement).value;
        languages.push(language);
    });

    const phone = (document.querySelector('input[name="phone"]') as HTMLInputElement).value;
    const email = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
    const website = (document.querySelector('input[name="website"]') as HTMLInputElement).value;

    const formData: ResumeFormData = {
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
    generateResume(formData)

}
//to generat resume
function generateResume(inputData: ResumeFormData) {
    console.log('Form Data:', inputData);

    document.getElementsByClassName("User_Name")[0].innerHTML = inputData.name;

    document.getElementsByClassName("User_Profession")[0].innerHTML = inputData.profession;


    document.getElementsByClassName("User_About")[0].innerHTML = inputData.aboutMe;


    document.getElementsByClassName("User_Email")[0].innerHTML = `<img class="icon" src="src/icons/email.svg" alt="icon not found"> <a  target="_blank"
    href="${inputData.contact.email}">${inputData.contact.email}</a>`;


    document.getElementsByClassName("User_Website")[0].innerHTML = `<img class="icon" src="src/icons/web.svg" alt="icon not found"> <a  target="_blank"
    href="${inputData.contact.website}">${inputData.contact.website}</a>`;


    document.getElementsByClassName("User_Num")[0].innerHTML =
        `<img class="icon" src="src/icons/phone.svg" alt="icon not found"> ${inputData.contact.phone}`


    let skillSection = document.getElementsByClassName("User_Skills")[0] as HTMLElement
    inputData.skills.forEach(skill => {
        const skillElement = document.createElement('li');
        skillElement.textContent = `${skill.skill}:${skill.proficiency}`;
        skillSection.appendChild(skillElement);
    })

    let languagesSection = document.getElementsByClassName("languages")[0] as HTMLElement
    inputData.languages.forEach(language => {
        const languageElement = document.createElement('p');
        languageElement.innerHTML = `<img class="icon" src="src/icons/tick.svg" alt="icon not found"> ${language}`;
        languagesSection.appendChild(languageElement);
    })
    
    let mainExperienceSection = document.getElementsByClassName("experience")[0] as HTMLElement
    inputData.experiences.forEach(experience => {
        let experienceElement = createExperienceSection(experience.company,experience.description)
        mainExperienceSection.appendChild(experienceElement);
    })
    
    let mainEducationSection = document.getElementsByClassName("education")[0] as HTMLElement
    inputData.educations.forEach(education => {
        let educationElement = createExperienceSection(education.institution,education.description)
        mainEducationSection.appendChild(educationElement);
    })
    let mainCertificationSection = document.getElementsByClassName("certification")[0] as HTMLElement
    inputData.certifications.forEach(certification => {
        let certificationElement = createExperienceSection(certification.certName,certification.certDescription)
        mainCertificationSection.appendChild(certificationElement);
    })
    uploadProfilePicture()


    const formContainer = document.getElementsByClassName("form-container")[0] as HTMLElement;
    const resumeContainer = document.getElementsByClassName("resume-container")[0] as HTMLElement;

    if (formContainer) {
        formContainer.style.display = "none";
    }

    if (resumeContainer) {
        resumeContainer.style.display = "flex";
    }


}
// to create sections
function createExperienceSection(educationTitle:string,educationDetails:string):HTMLElement {
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
        } else {
            collapseDetails.style.display = 'none';
            collapseBtn.textContent = '+'; 
        }
    });

    return container
}
function uploadProfilePicture(): void {
    const fileInput = document.getElementById('profile-picture') as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        
        // Create a FileReader to read the file
        const reader = new FileReader();
        reader.onload = (event) => {
            // Create an image element to display the profile picture
            const image = document.createElement('img');
            image.src = event.target?.result as string;
            image.alt = 'Profile Picture';

            // Add the image to the DOM or display it in a specific section
            const pictureSection = document.getElementById('profile_img_box');
            if (pictureSection) {
                pictureSection.appendChild(image);
            }
        };
        
        // Read the file as a data URL
        reader.readAsDataURL(file);
    } else {
        alert('Please select a file to upload.');
    }
}
