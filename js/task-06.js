const input = document.querySelector('#validation-input');

// console.log(event.target.value.length);
console.log(input.dataset.length)

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
   
    if (event.target.value.length===Number(input.dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
        
    }
  
}
 