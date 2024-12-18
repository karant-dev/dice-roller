const numDiceInput = document.getElementById('num-dice');
const diceTypeSelect = document.getElementById('dice-type');
const rollButton = document.getElementById('roll-button');
const diceContainer = document.getElementById('dice-container');
const resultDiv = document.getElementById('result');

const rollSound = new Audio('sounds/roll.mp3');

rollButton.addEventListener('click', () => {
    const numDice = parseInt(numDiceInput.value);
    const diceType = parseInt(diceTypeSelect.value);

    // Clear previous dice
    diceContainer.innerHTML = '';
    resultDiv.textContent = '';

    // Play sound
    rollSound.currentTime = 0; // Reset sound to beginning
    rollSound.play();

    let total = 0;
    for (let i = 0; i < numDice; i++) {
        const rollResult = rollDice(diceType);
        total += rollResult;
        createDieElement(rollResult, i, diceType);
    }

    resultDiv.textContent = `Total: ${total}`;
});

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function createDieElement(result, index, diceType) {
    const die = document.createElement('div');
    die.classList.add('die');

    // Set background image based on the result and dice type
    die.style.backgroundImage = `url('images/d${diceType}-${result}.png')`;

    diceContainer.appendChild(die);

    // Add a simple animation
    die.animate([
        // keyframes
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ], {
        // timing options
        duration: 500,
        iterations: 1
    });
}

// Trigger the roll button click event on page load
document.addEventListener('DOMContentLoaded', () => {
    rollButton.click();
});