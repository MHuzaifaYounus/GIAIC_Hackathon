document.querySelectorAll(".collapse-btn").forEach((element) => {
    element.addEventListener("click", () => {
        const content = element?.parentElement?.parentElement?.children[1]?.children[0] as HTMLElement | null
        if (content) {
            if (content.style.display === "none") {
                content.style.display = "block"
                element.innerHTML = "-"
            }
            else{
                content.style.display = "none"
                element.innerHTML = "+"
            }
        }

    })
})
