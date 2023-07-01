function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElement = document.querySelector(".change-color");
const bodyElement = document.querySelector("body");
const textElement = document.querySelector(".color");

buttonElement.addEventListener("click", onButtonClick);

function onButtonClick() {
  bodyElement.style.backgroundColor = getRandomHexColor();
  textElement.textContent = bodyElement.style.backgroundColor;
}
