// Home Page
const searchButton = document.createElement('button');
searchButton.textContent = 'Search';
document.body.appendChild(searchButton);

// Buy Page
const buyButton = document.createElement('button');
buyButton.textContent = 'Buy';
buyButton.addEventListener('click', () => {
    // Redirect logic
});
document.body.appendChild(buyButton);

// Sell Page
const sellButton = document.createElement('button');
sellButton.textContent = 'Sell';
sellButton.addEventListener('click', () => {
    // Redirect logic
});
document.body.appendChild(sellButton);

// Rent Page
const rentButton = document.createElement('button');
rentButton.textContent = 'Rent';
rentButton.addEventListener('click', () => {
    // Redirect logic
});
document.body.appendChild(rentButton);

// Lease Page
const leaseButton = document.createElement('button');
leaseButton.textContent = 'Lease';
leaseButton.addEventListener('click', () => {
    // Redirect logic
});
document.body.appendChild(leaseButton);

// About Us Page
const aboutUsButton = document.createElement('button');
aboutUsButton.textContent = 'About Us';
aboutUsButton.addEventListener('click', () => {
    // Redirect logic
});
document.body.appendChild(aboutUsButton);

// Contact Us Page
const contactUsButton = document.createElement('button');
contactUsButton.textContent = 'Contact Us';
contactUsButton.addEventListener('click', () => {
    // Redirect logic
});
document.body.appendChild(contactUsButton);

// Redirect Logic
const redirectLogic = (userType) => {
    if (userType === 'new') {
        // Redirect to Signup Page
        // After signup, redirect to Login Page
        // After login, redirect to respective pages
    } else if (userType === 'existing') {
        // Redirect to respective pages directly
    }
};

// Example Usage
redirectLogic('new');
redirectLogic('existing');
