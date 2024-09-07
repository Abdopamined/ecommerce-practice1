const registerForm = document.querySelector('.register');

let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let confirmPasswordInput = document.querySelector('#confirm-password');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let nameInput = document.querySelector('#name').value;
    let emailInput = document.querySelector('#email').value;
    let passwordInput = document.querySelector('#password').value;
    let confirmPasswordInput = document.querySelector('#confirm-password').value;

    if (passwordInput !== confirmPasswordInput) {
        alert('Passwords do not match');
        return;
    }

    const newUser = {
        username: nameInput,
        email: emailInput,
        password: passwordInput
    }

    fetch("https://retoolapi.dev/XBJh1R/data", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log('User registered successfully:', data);
        alert('Registration successful!');
        registerForm.reset();
    })
    .catch(error => {
        console.error('Error registering user:', error);
    });
});