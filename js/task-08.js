const loginForm = document.querySelector('.login-form');
const passwordInput = document.querySelector('input[name="password"]');
const emailInput = document.querySelector('input[name="email"]')

loginForm.addEventListener('submit', onFormSubmit);
const user = {};

function onFormSubmit(event) {
    event.preventDefault();
    if ((emailInput.value === '')||(passwordInput.value==='')) {
        return alert("Все поля должны быть заполненны!")
    }

    user.Email = emailInput.value;
    user.Password = passwordInput.value;
    console.log(user);
    loginForm.reset();
}