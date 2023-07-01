let counterValue = 0;

const decrementElement = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementElement = document.querySelector(
  'button[data-action="increment"]'
);
const valueElement = document.querySelector("#value");

decrementElement.addEventListener("click", onDecrementClick);
incrementElement.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  valueElement.textContent = counterValue;
}

function onIncrementClick() {
  counterValue += 1;
  valueElement.textContent = counterValue;
}
