function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputRef = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesBlockRef = document.querySelector('#boxes');
 let firstBoxSize = 30;


inputRef.addEventListener('input', () => inputRef.value);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes)


function createBoxes(amount) {
  amount = Number(inputRef.value);
  const createdboxes = [];

  
  for (let i = 1; i <= amount; i += 1) {
    if (createdboxes.length <= amount) {
      createdboxes.push(document.createElement('div'));
    }
  }
  boxesBlockRef.append(...createdboxes);

  createdboxes.forEach(box => {
   
    box.style.backgroundColor = getRandomHexColor();

    box.style.width = `${firstBoxSize}px`;
    box.style.height = `${firstBoxSize}px`;
   
    firstBoxSize += 10;
  });

  inputRef.value = "";
  console.log(boxesBlockRef);

}

function destroyBoxes() {
 
  boxesBlockRef.innerHTML = '';

}