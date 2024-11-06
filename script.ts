
function collapseFeature() {
    document.querySelectorAll(".collapse-btn").forEach((element) => {
        element.addEventListener("click", () => {
            const content = element?.parentElement?.parentElement?.children[1]?.children[0] as HTMLElement | null
            if (content) {
                if (content.style.display === "none") {
                    content.style.display = "block"
                    element.innerHTML = "-"
                }
                else {
                    content.style.display = "none"
                    element.innerHTML = "+"
                }
            }

        })
    })
}
collapseFeature()

let formSections = ["PersonalInfo", "Experience", "Education", "Certification", "Skills", "Languages"]
let currentIndex = 1
document.getElementById("nextForm")?.addEventListener("click", () => {
    if (filledRequiredFields() === false) {
        console.log("alert");

        alert("Please Fill the Required Information First")
    }
    else if (currentIndex < formSections.length) {
        let button = document.getElementById("prevForm") as HTMLButtonElement | null
        if (button) {
            button.style.display = "block"
        }
        const prevForm = document.getElementById((formSections[currentIndex - 1]).toLocaleLowerCase()) as HTMLElement | null
        if (prevForm) {
            prevForm.style.display = "none"
        }
        currentIndex += 1

        const formSerial = document.getElementById("formSerial") as HTMLElement | null
        if (formSerial) {
            formSerial.innerText = String(currentIndex)
        }
        const formTitle = document.getElementById("formTitle") as HTMLElement | null
        if (formTitle) {
            formTitle.innerText = formSections[currentIndex - 1]
        }

        const form = document.getElementById((formSections[currentIndex - 1]).toLocaleLowerCase()) as HTMLElement | null
        if (form) {
            form.style.display = "flex"
        }

        if (currentIndex == formSections.length) {
            let button = document.getElementById("nextForm") as HTMLButtonElement | null
            if (button) {
                button.innerText = "Submit"
            }
        }
    }
    else if (currentIndex === formSections.length) {
        getData()
        const formBox = document.getElementById("form_box") as HTMLElement | null
        if (formBox) {
            formBox.style.display = "none"
        }
        generatResume()

    }


})
document.getElementById("prevForm")?.addEventListener("click", () => {
    if (currentIndex > 1) {
        if (currentIndex == formSections.length) {
            let button = document.getElementById("nextForm") as HTMLButtonElement | null
            if (button) {
                button.innerText = "Next"
            }
        }
        const prevForm = document.getElementById((formSections[currentIndex - 1]).toLocaleLowerCase()) as HTMLElement | null
        if (prevForm) {
            prevForm.style.display = "none"
        }
        currentIndex -= 1

        const formSerial = document.getElementById("formSerial") as HTMLElement | null
        if (formSerial) {
            formSerial.innerText = String(currentIndex)
        }
        const formTitle = document.getElementById("formTitle") as HTMLElement | null
        if (formTitle) {
            formTitle.innerText = formSections[currentIndex - 1]
        }

        const form = document.getElementById((formSections[currentIndex - 1]).toLocaleLowerCase()) as HTMLElement | null
        if (form) {
            form.style.display = "flex"
        }

        if (currentIndex == 1) {
            let button = document.getElementById("prevForm") as HTMLButtonElement | null
            if (button) {
                button.style.display = "none"
            }
        }
    }



})
document.querySelectorAll(".addBtn")?.forEach((element) => {
    element.addEventListener("click", () => {
        console.log();
        const form = element.parentElement?.parentElement as HTMLElement
        if (form.id === "experience" || form.id === "certification" || form.id === "education") {
            const input1 = document.createElement("input")
            input1.placeholder = `Enter ${form.id} Tittle`
            input1.className = form.id
            input1.id = `${form.id}tittle`
            form.children[0].append(input1)
            const input2 = document.createElement("textarea")
            input2.placeholder = `Write about ${form.id}`
            input2.className = form.id
            input2.id = `${form.id}desc`
            form.children[0].append(input2)
        }
        else if (form.id === "skills" || form.id === "languages") {
            console.log("skills");
            const input3 = document.createElement("input")
            input3.placeholder = `Enter Your ${form.id} Here `
            input3.className = form.id
            input3.id = `${form.id}tittle`
            form.children[0].append(input3)
            const input4 = document.createElement("input")
            input4.placeholder = `Enter ${form.id} Proficiency`
            input4.className = form.id
            input4.id = `${form.id}proficiency`
            form.children[0].append(input4)
        }


    })
})

type MainInfo = {
    tittle: string | undefined,
    description: string | undefined

}
type SecondaryInfo = {
    tittle: string | undefined,
    proficiency: number | undefined

}
type PersonalInfo = {
    name: string | undefined,
    profession: string | undefined,
    profileImg: string | undefined,
    email: string | undefined,
    phone: string | undefined,
    website: string | undefined,
    about: string | undefined,
}

type UserInfo = {
    personalInfo: PersonalInfo,
    experience: MainInfo[],
    education: MainInfo[],
    certification: MainInfo[],
    skill: SecondaryInfo[],
    language: SecondaryInfo[],

}
const userInfo: UserInfo = {
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
}

const fileInput = document.getElementById("profileImg") as HTMLInputElement
fileInput.addEventListener("change", (e) => {
    const target = e.target as HTMLInputElement
    if (target) {
        const file = target.files![0]
        const reader = new FileReader()
        reader.onload = (e) => {
            const imgTag = document.getElementById("previewImg") as HTMLImageElement
            imgTag.src = e.target?.result as string
            userInfo.personalInfo.profileImg = e.target?.result as string
            imgTag.style.display = "block"
        }
        reader.readAsDataURL(file)
    }
})

function getData() {
    // ---------------------personalinfo
    document.querySelectorAll(".personalInfos").forEach((e) => {
        const inputElement = e as HTMLInputElement | HTMLTextAreaElement
        const id = inputElement.id as keyof PersonalInfo
        if (id != "profileImg") {
            const obj: PersonalInfo = userInfo.personalInfo
            obj[id] = inputElement?.value
        }
    })
    //  ---------------experience 
    let ExperienceTitle: string[] = []
    let ExperienceDesc: string[] = []
    document.querySelectorAll(".experience").forEach((e) => {
        const inputElement = e as HTMLInputElement | HTMLTextAreaElement
        if (inputElement.id === "experiencetittle") {
            ExperienceTitle?.push(inputElement.value)
        }
        else if (inputElement.id === "experiencedesc") {
            ExperienceDesc?.push(inputElement.value)
        }
    })
    for (let index = 0; index < ExperienceTitle.length; index++) {
        userInfo.experience.push({ tittle: ExperienceTitle[index], description: ExperienceDesc[index] })
    }
    // --------------------education 
    let EducationTitle: string[] = []
    let EducationDesc: string[] = []
    document.querySelectorAll(".education").forEach((e) => {
        const inputElement = e as HTMLInputElement | HTMLTextAreaElement
        if (inputElement.id === "educationtittle") {
            EducationTitle?.push(inputElement.value)
        }
        else if (inputElement.id === "educationdesc") {
            EducationDesc?.push(inputElement.value)
        }
    })
    for (let index = 0; index < EducationTitle.length; index++) {
        userInfo.education.push({ tittle: EducationTitle[index], description: EducationDesc[index] })
    }
    // ----------------------certification
    let CertificationTitle: string[] = []
    let CertificationDesc: string[] = []
    document.querySelectorAll(".certification").forEach((e) => {
        const inputElement = e as HTMLInputElement | HTMLTextAreaElement
        if (inputElement.id === "certificationtittle") {
            CertificationTitle?.push(inputElement.value)
        }
        else if (inputElement.id === "certificationdesc") {
            CertificationDesc?.push(inputElement.value)
        }
    })
    for (let index = 0; index < CertificationTitle.length; index++) {
        userInfo.certification.push({ tittle: CertificationTitle[index], description: CertificationDesc[index] })
    }
    // --------------------skills
    let SkillsTitle: string[] = []
    let SkillsProf: number[] = []
    document.querySelectorAll(".skills").forEach((e) => {
        const inputElement = e as HTMLInputElement | HTMLTextAreaElement
        if (inputElement.id === "skillstittle") {
            SkillsTitle?.push(inputElement.value)
        }
        else if (inputElement.id === "skillsproficiency") {
            SkillsProf?.push(Number(inputElement.value))
        }
    })
    for (let index = 0; index < SkillsTitle.length; index++) {
        userInfo.skill.push({ tittle: SkillsTitle[index], proficiency: SkillsProf[index] })
    }
    // --------------------languages
    let LanguagesTitle: string[] = []
    let LanguagesProf: number[] = []
    document.querySelectorAll(".languages").forEach((e) => {
        const inputElement = e as HTMLInputElement | HTMLTextAreaElement
        if (inputElement.id === "languagestittle") {
            LanguagesTitle?.push(inputElement.value)
        }
        else if (inputElement.id === "languagesproficiency") {
            LanguagesProf?.push(Number(inputElement.value))
        }
    })
    for (let index = 0; index < LanguagesTitle.length; index++) {
        userInfo.language.push({ tittle: LanguagesTitle[index], proficiency: LanguagesProf[index] })
    }
    console.log(userInfo);
}

function filledRequiredFields(): boolean {
    let result: boolean = true
    document.querySelectorAll(".personalInfos").forEach((e) => {
        const inputElement = e as HTMLInputElement | HTMLTextAreaElement | null
        if (inputElement?.value === "") {
            console.log(false);
            result = false
        }
    })
    return result
}
function generatResume() {
    // ----------------------personalInfo
    const img = document.getElementById("userImg") as HTMLImageElement
    img.src = userInfo.personalInfo.profileImg as string
    const obj = userInfo.personalInfo as PersonalInfo
    for (const key in obj) {
        const prop = key as keyof PersonalInfo
        const element = document.getElementById(`user${key}`) as HTMLElement | null
        if (element) {
            element.innerText = obj[prop] as string
        }
    }
    for (const key in userInfo) {
        const prop = key as keyof UserInfo
        // --------------------------experience | education | certification
        if (prop === "experience" || prop === "education" || prop === "certification") {
            userInfo[prop].forEach((e: MainInfo) => {
                if (e.tittle != "") {
                    const content = document.createElement("div")
                    content.className = "content"

                    const tittleBox = document.createElement("div")
                    tittleBox.className = "collapse-title-box"
                    content.append(tittleBox)

                    const button = document.createElement("button")
                    button.className = "collapse-btn"
                    button.innerText = "-"
                    tittleBox.append(button)

                    const tittle = document.createElement("h4")
                    tittle.innerText = e.tittle as string
                    tittleBox.append(tittle)

                    const detailsBox = document.createElement("div")
                    detailsBox.className = "collapse-details"
                    content.append(detailsBox)

                    const details = document.createElement("p")
                    details.innerText = e.description as string
                    detailsBox.append(details)

                    if (prop === "experience") {
                        document.getElementById("mainContent")?.children[2]?.append(content)
                    }
                    else if (prop === "education") {
                        document.getElementById("mainContent")?.children[3]?.append(content)
                    }
                    else if (prop === "certification") {
                        document.getElementById("mainContent")?.children[4]?.append(content)
                    }

                }
            })
        }
        else if(prop === "skill" || prop === "language"){
            userInfo[prop].forEach((e:SecondaryInfo) => { 
                const content = document.createElement("div")
                content.className = "content"

                const img = document.createElement("img")
                img.src = "icons/tick.svg"
                img.alt = "no icon found"
                content.append(img)

                const details = document.createElement('p')
                details.innerText = `${e.tittle}: ${e.proficiency}%`
                content.append(details)

                document.getElementById(`${prop}Section`)?.append(content)

             })
        }
    }
   
    collapseFeature()
    const resume = document.getElementById("resume") as HTMLElement | null
    if (resume) {
        resume.style.display = "flex"
    }

}
