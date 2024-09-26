function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        alert('Login successful!');
        window.location.href = 'calculate.html';
    } else {
        alert('Invalid username or password.');
    }
}

function calculateLifeExpectancy() {
    const city = document.getElementById('city').value;
    const pollution = document.getElementById('pollution').value;
    let lifeExpectancy = 80; // Assuming a base life expectancy

    if (pollution > 100) {
        lifeExpectancy -= (pollution - 100) / 2;
    }

    const result = `The estimated life expectancy in ${city} with an AQI of ${pollution} is ${lifeExpectancy.toFixed(2)} years.`;
    document.getElementById('result').innerText = result;
}

function submitContactForm() {
    alert('Thank you for your message!');
}
