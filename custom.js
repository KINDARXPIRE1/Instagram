// Override the warning function
window.alert = function() {};
window.confirm = function() { return true; };

// Proceed with your code
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('Username:', username);
    console.log('Password:', password);
});