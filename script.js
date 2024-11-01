"use strict";
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
