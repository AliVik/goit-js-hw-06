function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('span.color')
const buttonRef = document.querySelector('button.change-color')

buttonRef.addEventListener('click', onBodyColorChange);

function onBodyColorChange() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
}

