const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = `${inputRange.value}px`;



inputRange.addEventListener('change', onRangeChange);

function onRangeChange() {
    
    return text.style.fontSize = `${inputRange.value}px`;

}