const inputElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

inputElement.addEventListener("input", changeFontSize);

changeFontSize();

function changeFontSize() {
  textElement.style.fontSize = `${inputElement.value}px`;
}