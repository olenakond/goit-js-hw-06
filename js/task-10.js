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
  const minValue = Number(inputElement.getAttribute("min"));
  const maxValue = Number(inputElement.getAttribute("max"));

  if (inputElement.value < minValue || inputElement.value > maxValue) {
    alert("Please enter your number from 1 to 100!");
  } else {
    createBoxes(inputElement.value);
  }
}

function destroyBoxes() {
  boxCollection.innerHTML = "";
  inputElement.value = "";
}

function createBoxes(amount) {
  const stepValue = Number(inputElement.getAttribute("step"));
  let sizeBox = 30;

  for (let i = 1; i <= amount; i += stepValue) {
    const box = document.createElement("div");
    sizeBox += 10;
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxCollection.append(box);
  }
}
