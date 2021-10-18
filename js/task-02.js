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

  const createdElementTags = ingredients.map(ingredient => {
    const createdElementTag = document.createElement('li');
    createdElementTag.textContent = ingredient;
    createdElementTag.classList.add('item');
    return createdElementTag;
  });
  
  ingredientsList.append(...createdElementTags);
  console.log(ingredientsList);
  
}
  

createIngredientsItems();
