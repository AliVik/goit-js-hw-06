const categoriesItems = document.querySelectorAll('.item');


const countCategoriesItemsQuantity = () => {
   console.log(`Number of categories: ${categoriesItems.length}`);
   
    categoriesItems.forEach(categoryItem => {
        
        console.log(`Category: ${categoryItem.querySelector('h2').textContent}`);
        console.log(`Elements: ${categoryItem.querySelectorAll('li').length}`);


    });

    
};

countCategoriesItemsQuantity();
