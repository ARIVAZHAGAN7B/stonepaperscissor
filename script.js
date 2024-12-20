let score = 0;
let health = 5;

function change(event) {
    const rand = ["Stone", "Scissor", "Paper"];
    const selectrand = rand[Math.floor(Math.random() * 3)];
    document.getElementById("result").textContent = `Random choice: ${selectrand}`;
    const input = event.currentTarget.getAttribute("data-choice");
    console.log(`User choice: ${input}`);
    console.log(`Random choice: ${selectrand}`);

    if (selectrand === input) {
        alert("Draw");
    } else if (
        (selectrand === "Stone" && input === "Paper") ||
        (selectrand === "Scissor" && input === "Stone") ||
        (selectrand === "Paper" && input === "Scissor")
    ) {
        alert("You Won");
        score++;
        document.querySelector(".score").textContent = `Score : ${score}`;
    } else {
        alert("You Lost");
        health--;
        document.querySelector(".life").textContent = `Health : ${health}`;
    }

    if (health <= 0) {
        alert("Game Over!");
        location.reload();
    }
}
