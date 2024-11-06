"use strict";
var _a, _b, _c, _d;
let isEditting = false;
function collapseFeature() {
    document.querySelectorAll(".collapse-btn").forEach((element) => {
        element.addEventListener("click", () => {
            var _a, _b, _c;
            const content = (_c = (_b = (_a = element === null || element === void 0 ? void 0 : element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.children[1]) === null || _c === void 0 ? void 0 : _c.children[0];
            if (content) {
                if (content.style.display === "none") {
                    content.style.display = "block";
                    element.innerHTML = "-";
                }
                else {
                    content.style.display = "none";
                    element.innerHTML = "+";
                }
            }
        });
    });
}
collapseFeature();
let formSections = ["PersonalInfo", "Experience", "Education", "Certification", "Skills", "Languages"];
let currentIndex = 1;
(_a = document.getElementById("nextForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    if (filledRequiredFields() === false) {
        console.log("alert");
        alert("Please Fill the Required Information First");
    }
    else if (currentIndex < formSections.length) {
        let button = document.getElementById("prevForm");
        if (button) {
            button.style.display = "block";
        }
        const prevForm = document.getElementById((formSections[currentIndex - 1]).toLocaleLowerCase());
        if (prevForm) {
            prevForm.style.display = "none";
        }
        currentIndex += 1;
        const formSerial = document.getElementById("formSerial");
        if (formSerial) {
            formSerial.innerText = String(currentIndex);
        }
        const formTitle = document.getElementById("formTitle");
        if (formTitle) {
            formTitle.innerText = formSections[currentIndex - 1];
        }
        const form = document.getElementById((formSections[currentIndex - 1]).toLocaleLowerCase());
        if (form) {
            form.style.display = "flex";
        }
        if (currentIndex == formSections.length) {
            let button = document.getElementById("nextForm");
            if (button) {
                button.innerText = "Submit";
            }
        }
    }
    else if (currentIndex === formSections.length) {
        getData();
        const formBox = document.getElementById("form_box");
        if (formBox) {
            formBox.style.display = "none";
        }
        generatResume();
    }
});
(_b = document.getElementById("prevForm")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    if (currentIndex > 1) {
        if (currentIndex == formSections.length) {
            let button = document.getElementById("nextForm");
            if (button) {
                button.innerText = "Next";
            }
        }
        const prevForm = document.getElementById((formSections[currentIndex - 1]).toLocaleLowerCase());
        if (prevForm) {
            prevForm.style.display = "none";
        }
        currentIndex -= 1;
        const formSerial = document.getElementById("formSerial");
        if (formSerial) {
            formSerial.innerText = String(currentIndex);
        }
        const formTitle = document.getElementById("formTitle");
        if (formTitle) {
            formTitle.innerText = formSections[currentIndex - 1];
        }
        const form = document.getElementById((formSections[currentIndex - 1]).toLocaleLowerCase());
        if (form) {
            form.style.display = "flex";
        }
        if (currentIndex == 1) {
            let button = document.getElementById("prevForm");
            if (button) {
                button.style.display = "none";
            }
        }
    }
});
(_c = document.querySelectorAll(".addBtn")) === null || _c === void 0 ? void 0 : _c.forEach((element) => {
    element.addEventListener("click", () => {
        var _a;
        console.log();
        const form = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        if (form.id === "experience" || form.id === "certification" || form.id === "education") {
            const input1 = document.createElement("input");
            input1.placeholder = `Enter ${form.id} Tittle`;
            input1.className = form.id;
            input1.id = `${form.id}tittle`;
            form.children[0].append(input1);
            const input2 = document.createElement("textarea");
            input2.placeholder = `Write about ${form.id}`;
            input2.className = form.id;
            input2.id = `${form.id}desc`;
            form.children[0].append(input2);
        }
        else if (form.id === "skills" || form.id === "languages") {
            console.log("skills");
            const input3 = document.createElement("input");
            input3.placeholder = `Enter Your ${form.id} Here `;
            input3.className = form.id;
            input3.id = `${form.id}tittle`;
            form.children[0].append(input3);
            const input4 = document.createElement("input");
            input4.placeholder = `Enter ${form.id} Proficiency`;
            input4.className = form.id;
            input4.id = `${form.id}proficiency`;
            form.children[0].append(input4);
        }
    });
});
const userInfo = {
    personalInfo: {
        name: "",
        profession: "",
        profileImg: "",
        email: "",
        phone: "",
        website: "",
        about: "",
    },
    experience: [],
    education: [],
    certification: [],
    skill: [],
    language: [],
};
function clearData() {
    userInfo.personalInfo.name = '';
    userInfo.personalInfo.about = '';
    userInfo.personalInfo.email = '';
    userInfo.personalInfo.phone = '';
    userInfo.personalInfo.profession = '';
    userInfo.personalInfo.website = '';
    userInfo.education = [];
    userInfo.experience = [];
    userInfo.certification = [];
    userInfo.skill = [];
    userInfo.language = [];
    const skills = document.getElementById("skillSection");
    skills.innerHTML = '<h2 class="subheading">Skills</h2>';
    const languages = document.getElementById("languageSection");
    languages.innerHTML = ' <h2 class="subheading">Languages</h2>';
    const Experience = document.getElementById("userexperience");
    Experience.innerHTML = '<h3>Experience</h3>';
    const Education = document.getElementById("usereducation");
    Education.innerHTML = '<h3>Education</h3>';
    const Certification = document.getElementById("usercertification");
    Certification.innerHTML = '<h3>Certification</h3>';
}
const fileInput = document.getElementById("profileImg");
fileInput.addEventListener("change", (e) => {
    const target = e.target;
    if (target) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a, _b;
            const imgTag = document.getElementById("previewImg");
            imgTag.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            userInfo.personalInfo.profileImg = (_b = e.target) === null || _b === void 0 ? void 0 : _b.result;
            imgTag.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});
function getData() {
    // ---------------------personalinfo
    document.querySelectorAll(".personalInfos").forEach((e) => {
        const inputElement = e;
        const id = inputElement.id;
        if (id != "profileImg") {
            const obj = userInfo.personalInfo;
            obj[id] = inputElement === null || inputElement === void 0 ? void 0 : inputElement.value;
        }
    });
    //  ---------------experience 
    let ExperienceTitle = [];
    let ExperienceDesc = [];
    document.querySelectorAll(".experience").forEach((e) => {
        const inputElement = e;
        if (inputElement.id === "experiencetittle") {
            ExperienceTitle === null || ExperienceTitle === void 0 ? void 0 : ExperienceTitle.push(inputElement.value);
        }
        else if (inputElement.id === "experiencedesc") {
            ExperienceDesc === null || ExperienceDesc === void 0 ? void 0 : ExperienceDesc.push(inputElement.value);
        }
    });
    for (let index = 0; index < ExperienceTitle.length; index++) {
        userInfo.experience.push({ tittle: ExperienceTitle[index], description: ExperienceDesc[index] });
    }
    // --------------------education 
    let EducationTitle = [];
    let EducationDesc = [];
    document.querySelectorAll(".education").forEach((e) => {
        const inputElement = e;
        if (inputElement.id === "educationtittle") {
            EducationTitle === null || EducationTitle === void 0 ? void 0 : EducationTitle.push(inputElement.value);
        }
        else if (inputElement.id === "educationdesc") {
            EducationDesc === null || EducationDesc === void 0 ? void 0 : EducationDesc.push(inputElement.value);
        }
    });
    for (let index = 0; index < EducationTitle.length; index++) {
        userInfo.education.push({ tittle: EducationTitle[index], description: EducationDesc[index] });
    }
    // ----------------------certification
    let CertificationTitle = [];
    let CertificationDesc = [];
    document.querySelectorAll(".certification").forEach((e) => {
        const inputElement = e;
        if (inputElement.id === "certificationtittle") {
            CertificationTitle === null || CertificationTitle === void 0 ? void 0 : CertificationTitle.push(inputElement.value);
        }
        else if (inputElement.id === "certificationdesc") {
            CertificationDesc === null || CertificationDesc === void 0 ? void 0 : CertificationDesc.push(inputElement.value);
        }
    });
    for (let index = 0; index < CertificationTitle.length; index++) {
        userInfo.certification.push({ tittle: CertificationTitle[index], description: CertificationDesc[index] });
    }
    // --------------------skills
    let SkillsTitle = [];
    let SkillsProf = [];
    document.querySelectorAll(".skills").forEach((e) => {
        const inputElement = e;
        if (inputElement.id === "skillstittle") {
            SkillsTitle === null || SkillsTitle === void 0 ? void 0 : SkillsTitle.push(inputElement.value);
        }
        else if (inputElement.id === "skillsproficiency") {
            SkillsProf === null || SkillsProf === void 0 ? void 0 : SkillsProf.push(Number(inputElement.value));
        }
    });
    for (let index = 0; index < SkillsTitle.length; index++) {
        userInfo.skill.push({ tittle: SkillsTitle[index], proficiency: SkillsProf[index] });
    }
    // --------------------languages
    let LanguagesTitle = [];
    let LanguagesProf = [];
    document.querySelectorAll(".languages").forEach((e) => {
        const inputElement = e;
        if (inputElement.id === "languagestittle") {
            LanguagesTitle === null || LanguagesTitle === void 0 ? void 0 : LanguagesTitle.push(inputElement.value);
        }
        else if (inputElement.id === "languagesproficiency") {
            LanguagesProf === null || LanguagesProf === void 0 ? void 0 : LanguagesProf.push(Number(inputElement.value));
        }
    });
    for (let index = 0; index < LanguagesTitle.length; index++) {
        userInfo.language.push({ tittle: LanguagesTitle[index], proficiency: LanguagesProf[index] });
    }
    console.log(userInfo);
}
function filledRequiredFields() {
    let result = true;
    document.querySelectorAll(".personalInfos").forEach((e) => {
        const inputElement = e;
        if ((inputElement === null || inputElement === void 0 ? void 0 : inputElement.value) === "") {
            console.log(false);
            result = false;
        }
    });
    return result;
}
function generatResume() {
    // ----------------------personalInfo
    const img = document.getElementById("userImg");
    img.src = userInfo.personalInfo.profileImg;
    const obj = userInfo.personalInfo;
    for (const key in obj) {
        const prop = key;
        const element = document.getElementById(`user${key}`);
        if (element) {
            element.innerText = obj[prop];
        }
    }
    for (const key in userInfo) {
        const prop = key;
        // --------------------------experience | education | certification
        if (prop === "experience" || prop === "education" || prop === "certification") {
            userInfo[prop].forEach((e) => {
                var _a, _b, _c, _d, _e, _f;
                if (e.tittle != "") {
                    console.log(prop);
                    const content = document.createElement("div");
                    content.className = "content";
                    const tittleBox = document.createElement("div");
                    tittleBox.className = "collapse-title-box";
                    content.append(tittleBox);
                    const button = document.createElement("button");
                    button.className = "collapse-btn";
                    button.innerText = "-";
                    tittleBox.append(button);
                    const tittle = document.createElement("h4");
                    tittle.innerText = e.tittle;
                    tittleBox.append(tittle);
                    const detailsBox = document.createElement("div");
                    detailsBox.className = "collapse-details";
                    content.append(detailsBox);
                    const details = document.createElement("p");
                    details.innerText = e.description;
                    detailsBox.append(details);
                    if (prop === "experience") {
                        (_b = (_a = document.getElementById("mainContent")) === null || _a === void 0 ? void 0 : _a.children[2]) === null || _b === void 0 ? void 0 : _b.append(content);
                    }
                    else if (prop === "education") {
                        (_d = (_c = document.getElementById("mainContent")) === null || _c === void 0 ? void 0 : _c.children[3]) === null || _d === void 0 ? void 0 : _d.append(content);
                    }
                    else if (prop === "certification") {
                        (_f = (_e = document.getElementById("mainContent")) === null || _e === void 0 ? void 0 : _e.children[4]) === null || _f === void 0 ? void 0 : _f.append(content);
                    }
                }
                else if (e.tittle === "" && userInfo[prop].length === 1) {
                    const section = document.getElementById(`user${prop}`);
                    section.style.display = "none";
                }
            });
        }
        // ------------------------skills || language
        else if (prop === "skill" || prop === "language") {
            userInfo[prop].forEach((e) => {
                var _a;
                if (e.tittle != "") {
                    const content = document.createElement("div");
                    content.className = "content";
                    const img = document.createElement("img");
                    img.src = "icons/tick.svg";
                    img.alt = "no icon found";
                    content.append(img);
                    const details = document.createElement('p');
                    details.innerText = `${e.tittle}: ${e.proficiency}%`;
                    content.append(details);
                    (_a = document.getElementById(`${prop}Section`)) === null || _a === void 0 ? void 0 : _a.append(content);
                }
            });
        }
    }
    collapseFeature();
    const resume = document.getElementById("resume");
    if (resume) {
        resume.style.display = "flex";
    }
}
(_d = document.getElementById("edit")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    isEditting = true;
    clearData();
    const formBox = document.getElementById("form_box");
    formBox.style.display = "block";
    const resume = document.getElementById("resume");
    resume.style.display = "none";
});
