function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numbersInput = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesCreate = document.querySelector("#boxes");

createBtn.addEventListener("click", () => createBoxes(numbersInput.value));
destroyBtn.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  const boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    const newElement = document.createElement("div");
    newElement.style.width = `${30 + 10 * i}px`;
    newElement.style.height = `${30 + 10 * i}px`;
    newElement.style.backgroundColor = getRandomHexColor();
    boxesArray.push(newElement);
  }
  boxesCreate.append(...boxesArray);
}

function destroyBoxes() {
  boxesCreate.innerHTML = "";
}
