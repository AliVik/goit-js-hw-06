function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputRef = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesBlockRef = document.querySelector('#boxes');

inputRef.addEventListener('input', () => inputRef.value);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', () => {
   boxesBlockRef.innerHTML = '';
  console.log(boxesBlockRef);
});


function createBoxes(amount) {
  amount = Number(inputRef.value);
  const createdboxes = [];
  
  for (let i = 1; i <= amount; i += 1) {
    if (createdboxes.length <= amount) {
      createdboxes.push(document.createElement('div'));
      
    }
    createdboxes.forEach(box => {
      box.style.backgroundColor = getRandomHexColor();
      createdboxes[0].style.width = '30px';
      createdboxes[0].style.height = '30px';
      
      for (let i = 1; i < createdboxes.length; i += 1) {
        
        createdboxes[i].style.width = `${parseInt(createdboxes[i - 1].style.width) + 10}px`;
        createdboxes[i].style.height = `${parseInt(createdboxes[i - 1].style.height) + 10}px`;
      
      }

    });
  }
  
  boxesBlockRef.append(...createdboxes);
  console.log(boxesBlockRef);

}

