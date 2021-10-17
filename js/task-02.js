const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const createIngredientsItems = () => {
  for (const ingredient of ingredients) {
    const createdElementTags = document.createElement('li');
    createdElementTags.textContent = ingredient;
    createdElementTags.classList.add('item');
    ingredientsList.append(createdElementTags);

  }
  console.log(ingredientsList);
}
  

createIngredientsItems();
