const signUpForm = document.createElement('form');
signUpForm.setAttribute('id', 'signupForm');

const usernameInput = document.createElement('input');
usernameInput.setAttribute('type', 'text');
usernameInput.setAttribute('placeholder', 'Enter your username');
usernameInput.setAttribute('name', 'username');

const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('placeholder', 'Enter your email');
emailInput.setAttribute('name', 'email');

const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('placeholder', 'Enter your password');
passwordInput.setAttribute('name', 'password');

const signUpButton = document.createElement('button');
signUpButton.setAttribute('type', 'submit');
signUpButton.textContent = 'Sign Up';

signUpForm.append(usernameInput, emailInput, passwordInput, signUpButton);

document.body.appendChild(signUpForm);
