const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameOutput.textContent = 'Anonymous';



nameInput.addEventListener('input', (event) => {
    if (nameInput.value === '') {
        return nameOutput.textContent = 'Anonymous';
  }
  return nameOutput.textContent = event.currentTarget.value;
   
});

