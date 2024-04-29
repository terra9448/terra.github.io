// Define Property Class
class Property {
  constructor(type, location, price) {
    this.type = type;
    this.location = location;
    this.price = price;
  }

  getPropertyDetails() {
    return `Type: ${this.type}, Location: ${this.location}, Price: ${this.price}`;
  }
}

// Sample Property Instances
const property1 = new Property('House', 'City A', '$200,000');
const property2 = new Property('Apartment', 'City B', '$150,000');

// Display Property Details
console.log(property1.getPropertyDetails());
console.log(property2.getPropertyDetails());

// User Authentication
function login(username, password) {
  // Authentication Logic
  return true; // Return true for demo purposes
}

// Email Notification Function
function sendEmail(recipient, message) {
  console.log(`Email sent to ${recipient}: ${message}`);
}

// Sample User Interaction
const user = { username: 'user123', email: 'user@example.com' };
const admin = { username: 'admin', email: 'admin@example.com' };

// Simulate User Buying Property
if (login('user123', 'password')) {
  sendEmail(user.email, 'You have bought a property.');
  sendEmail(admin.email, 'User123 has bought a property.');
}

// Property Database
const properties = [
  { type: 'House', location: 'City A', price: '$200,000' },
  { type: 'Apartment', location: 'City B', price: '$150,000' },
  { type: 'Villa', location: 'City C', price: '$500,000' }
];

// Search Function
function searchProperty(location) {
  return properties.filter(property => property.location === location);
}

// Filter Function
function filterPropertyByPrice(maxPrice) {
  return properties.filter(property => parseInt(property.price.replace('$', '')) <= parseInt(maxPrice.replace('$', ''));
}

// Sample Search and Filter
console.log(searchProperty('City A'));
console.log(filterPropertyByPrice('$300,000'));

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
