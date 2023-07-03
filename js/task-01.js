const categoriesArr = document.querySelectorAll(".item");

console.log("Number of categories: ", categoriesArr.length);

categoriesArr.forEach((category) => {
  const nameOfCategory = category.firstElementChild.textContent;
  const elementsOfList = category.lastElementChild.children;

  console.log("Category: ", nameOfCategory);
  console.log("Elements: ", elementsOfList.length);
});
