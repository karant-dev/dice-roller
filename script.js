const numDiceInput = document.getElementById('num-dice');
const rollButton = document.getElementById('roll-button');
const diceContainer = document.getElementById('dice-container');
const resultDiv = document.getElementById('result');

const rollSound = new Audio('sounds/roll.mp3'); // Update with your sound file

rollButton.addEventListener('click', () => {
    const numDice = parseInt(numDiceInput.value);

    // Clear previous dice
    diceContainer.innerHTML = '';
    resultDiv.textContent = '';

    // Play sound
    rollSound.currentTime = 0; // Reset sound to beginning
    rollSound.play();

    let total = 0;
    for (let i = 0; i < numDice; i++) {
        const rollResult = rollDice();
        total += rollResult;
        createDieElement(rollResult);
    }

    resultDiv.textContent = `Total: ${total}`;
});

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function createDieElement(result) {
    const die = document.createElement('div');
    die.classList.add('die');

    // Set background image based on the result
    die.style.backgroundImage = `url('images/d6-${result}.png')`;

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