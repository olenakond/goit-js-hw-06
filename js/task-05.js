const inputNameElement = document.querySelector("#name-input");
const outputNameElement = document.querySelector("#name-output");

inputNameElement.addEventListener("input", nameOutput);

function nameOutput() {
  if (inputNameElement.value === "") {
    outputNameElement.textContent = "Anonymous";
  } else {
    outputNameElement.textContent = inputNameElement.value.trim() || "Anonymous";
  }
}
