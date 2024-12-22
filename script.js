const choices = ["Stone", "Scissor", "Paper"];
let gameState = {
    score: 0,
    health: 5
};

// Function to get a random choice
function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to update the UI
function updateUI() {
    document.querySelector(".score").textContent = `Score: ${gameState.score}`;
    document.querySelector(".life").textContent = `Health: ${gameState.health}`;
}

// Function to handle game over
function handleGameOver() {
    alert("Game Over!");
    gameState.score = 0;
    gameState.health = 5;
    updateUI();
    document.getElementById("status").textContent = "";
    document.getElementById("result").textContent = "";
}

// Main game function
function change(event) {
    const userChoice = event.currentTarget.getAttribute("data-choice");
    const computerChoice = getRandomChoice();

    document.getElementById("result").textContent = `The last random choice: ${computerChoice}`;
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (userChoice === computerChoice) {
        document.getElementById("status").textContent = "It's a Draw!";
    } else if (
        (computerChoice === "Stone" && userChoice === "Paper") ||
        (computerChoice === "Scissor" && userChoice === "Stone") ||
        (computerChoice === "Paper" && userChoice === "Scissor")
    ) {
        gameState.score++;
        document.getElementById("status").textContent = "You Won!";
    } else {
        gameState.health--;
        document.getElementById("status").textContent = "You Lost!";
    }

    updateUI();

    if (gameState.health <= 0) {
        handleGameOver();
    }
}

// Attach event listeners to the choices
document.querySelectorAll(".choice").forEach(choice => {
    choice.addEventListener("click", change);
});

// Initial UI update
updateUI();
