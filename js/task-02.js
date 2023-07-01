const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientElementArr = ingredients.map((ingredient) => {
  const ingredientElement = document.createElement("li");
  ingredientElement.textContent = ingredient;
  ingredientElement.classList.add("item");
  return ingredientElement;
});

ingredientsList.append(...ingredientElementArr);

console.log(ingredientsList);
