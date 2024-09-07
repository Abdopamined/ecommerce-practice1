const loginForm = document.querySelector('.login');

let emailInputLogin = document.querySelector('#loginemail').value;
let passwordInputLogin = document.querySelector('#loginpassword').value;

loginForm.addEventListener('click', function(event) {
    event.preventDefault();

    let emailInputLogin = document.querySelector('#loginemail').value;
    let passwordInputLogin = document.querySelector('#loginpassword').value;

    fetch("https://retoolapi.dev/XBJh1R/data").then(data => data.json())
    .then(data => {
        data.forEach(user => {
            if (user.email === emailInputLogin && user.password === passwordInputLogin) {
                console.log('User logged in successfully:', user);
                alert('Login successful!');
                window.location.href = 'index.html';
                localStorage.setItem('LogedIn', user.username )
            }
        });
    })
    
});

fetch("https://retoolapi.dev/XBJh1R/data").then(data => data.json()).then(data => console.log(data))

