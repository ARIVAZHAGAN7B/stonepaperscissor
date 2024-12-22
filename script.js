let score = 0;
let health = 5;

function change(event) {
    const rand = ["Stone", "Scissor", "Paper"];
    const selectrand = rand[Math.floor(Math.random() * 3)];
    document.getElementById("result").textContent = ` the last random choice: ${selectrand}`;
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
        score++;
        document.querySelector(".score").textContent = `Score : ${score}`;
        alert("You Won");
    } else {
        health--;
        document.querySelector(".life").textContent = `Health : ${health}`;
        alert("You Lost");
    }

    if (health <= 0) {
        alert("Game Over!");
        location.reload();
    }
}
