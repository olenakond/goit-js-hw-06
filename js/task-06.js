const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", validateInput);

function validateInput() {
  const valueDataLength = inputElement.getAttribute('data-length');

  if (inputElement.value.length === Number(valueDataLength)) {
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.add("invalid");
  }
}
