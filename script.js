let CheckBoxList = document.querySelectorAll(".customCheckbox");
let InputList = document.querySelectorAll(".goal_input");
let red = document.querySelector(".rectangle6");
let progress = document.querySelector(".rectangle5");
let progress2 = document.querySelector(".hero");
let imgg = document.querySelectorAll(".hide1");
var x = 0;
const saveData = JSON.parse(localStorage.getItem("Data")) || { goal1: "", goal2: "", goal3: "" };
const saveData1 = JSON.parse(localStorage.getItem("check")) || { completed1: false, completed2: false, completed3: false };
x = [saveData1.completed1, saveData1.completed2, saveData1.completed3].filter(Boolean).length;
InputList.forEach((input, index) => {
    input.value = saveData[`goal${index + 1}`] || "";
});
imgg.forEach((img, index) => {
    if (saveData1[`completed${index + 1}`]) {
        img.classList.remove("hide");
    }
});
function UpdateProgress() {
    let completed = [saveData1.completed1, saveData1.completed2, saveData1.completed3].filter(Boolean).length;
    progress.style.width = (completed * 33.33) + "%";
    progress2.innerHTML = `${completed}/3 Completed`;

    if (completed === 0) {
        progress2.classList.add("hero");
        progress.classList.add("hero");
    } else {
        progress2.classList.remove("hero");
        progress.classList.remove("hero");
    }
}
function togglee(child, index) {
    child.classList.toggle("hide");
    saveData1[`completed${index + 1}`] = !child.classList.contains("hide");
    localStorage.setItem("check", JSON.stringify(saveData1));
    UpdateProgress();
}
CheckBoxList.forEach((CheckBox, index) => {
    CheckBox.addEventListener("click", () => {
        if ([...InputList].some(input => input.value.trim() === "")) {
            red.classList.remove("hide");
        } else {
            red.classList.add("hide");
            togglee(imgg[index], index);
        }
    });
});
InputList.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        let savedData = JSON.parse(localStorage.getItem("Data")) || { goal1: "", goal2: "", goal3: "" };
        savedData[`goal${index + 1}`] = e.target.value;
        localStorage.setItem("Data", JSON.stringify(savedData));
    });

    input.addEventListener("focus", () => {
        red.classList.add("hide");
    });
});
UpdateProgress();
