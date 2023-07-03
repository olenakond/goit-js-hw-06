const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", validateInput);

function validateInput() {
  const valueDataLength = Number(inputElement.getAttribute('data-length'));
  const valueInputElement = inputElement.value.trim();

  if ( valueInputElement.length === valueDataLength) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
}
