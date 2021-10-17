const categoriesItems = document.querySelectorAll('.item');

let categoriesItemsQuantity = 0;
const countCategoriesItemsQuantity = () => {
    for (const categoryItem of categoriesItems) {
        if (categoryItem) {
            categoriesItemsQuantity += 1;
            
        }
    }
    console.log(`Number of categories: ${categoriesItemsQuantity}`);
    categoriesItems.forEach(categoryItem => {
        console.log(`Category: ${categoryItem.querySelector('h2').textContent}`);
        console.log(`Elements: ${categoryItem.querySelectorAll('li').length}`);


    });

    
};

countCategoriesItemsQuantity();
