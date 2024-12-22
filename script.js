const choices = ["Stone", "Scissor", "Paper"];
let gameState = {
    score: 0,
    health: 5
};

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateUI() {
    document.querySelector(".score").textContent = `Score: ${gameState.score}`;
    document.querySelector(".life").textContent = `Health: ${gameState.health}`;
}

function handleGameOver() {
    alert("Game Over!");
    gameState.score = 0;
    gameState.health = 5;
    updateUI();
}

function change(event) {
    const userChoice = event.currentTarget.getAttribute("data-choice");
    const computerChoice = getRandomChoice();
    document.getElementById("result").textContent = `The last random choice: ${computerChoice}`;

    console.log(`User choice: ${userChoice}`);
    console.log(`Random choice: ${computerChoice}`);

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

// Initial UI Update
updateUI();
