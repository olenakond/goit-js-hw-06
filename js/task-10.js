function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreateElement = document.querySelector("button[data-create]");
const buttonDestroyElement = document.querySelector("button[data-destroy]");
const inputElement = document.querySelector("input");
const boxCollection = document.querySelector("#boxes");

buttonCreateElement.addEventListener("click", onCreateClick);
buttonDestroyElement.addEventListener("click", destroyBoxes);

function onCreateClick() {
  createBoxes(inputElement.value);
}

function destroyBoxes() {
  boxCollection.innerHTML = "";
}

function createBoxes(amount) {
  let sizeBox = 30;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    sizeBox += 10;
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxCollection.append(box);
  }
}
