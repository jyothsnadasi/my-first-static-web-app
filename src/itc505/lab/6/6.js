// Function to change the header text
function changeHeaderText() {
    document.getElementById('headerTitle').textContent = 'Discover the Interactive Experience';
}

// Function to redirect to another page
function redirectToAnotherPage() {
    console.log('Redirecting...');
    window.location.href = 'another_page.html';
}

// Function to roll the dice
function rollDice() {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Update the dice image source based on the random number
    const diceImage = document.getElementById('diceImage');
    diceImage.src = 'dice.jpg';

    // Display the random number in the text box
    const resultBox = document.getElementById('resultBox');
    resultBox.value = randomNumber;
}


// Call the changeHeaderText function when the page loads
document.addEventListener('DOMContentLoaded', changeHeaderText);
