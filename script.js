document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you would typically send the credentials to your server
    console.log('Username:', username);
    console.log('Password:', password);

    alert('You"ve been scammed, I love you too!!');
});