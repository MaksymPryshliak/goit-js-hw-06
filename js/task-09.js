function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bodyColorChng = document.querySelector("body");
const backgroundTextChange = document.querySelector(".color");
changeColorBtn.addEventListener("click", () => {
let randomColor = getRandomHexColor();
backgroundTextChange.textContent = randomColor;
bodyColorChng.style.backgroundColor = randomColor;
});

