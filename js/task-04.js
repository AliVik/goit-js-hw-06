const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');
let counterValueNumber = Number(counterValue.textContent = '0');

decrementButton.addEventListener('click', () => {
    counterValueNumber -= 1;
    counterValue.textContent = counterValueNumber;
    console.log(counterValueNumber);
});
    

incrementButton.addEventListener('click', () => {
    counterValueNumber += 1;
    counterValue.textContent = counterValueNumber;
    console.log(counterValueNumber);
});