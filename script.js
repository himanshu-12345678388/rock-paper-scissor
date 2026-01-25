// Function to take user input using prompt
function getUserChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");

    if (choice === null) {
        return "Invalid";
    }

    choice = choice.toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return "Invalid";
    }
}

// Function to generate computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Function to play one round and return winner
function playRound() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();

    if (userChoice === "Invalid") {
        console.log("Invalid input. Round skipped.");
        return "invalid";
    }

    console.log(`User: ${userChoice} | Computer: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("Draw\n");
        return "draw";
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("User wins this round\n");
        return "user";
    } else {
        console.log("Computer wins this round\n");
        return "computer";
    }
}

// Game logic: 3 rounds
let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

while (roundsPlayed < 3) {
    const result = playRound();

    if (result === "user") userScore++;
    else if (result === "computer") computerScore++;
    else if (result === "invalid") continue; // don't count invalid round

    roundsPlayed++;
}

// Final result
console.log("Final Score:");
console.log(`User: ${userScore}`);
console.log(`Computer: ${computerScore}`);

if (userScore > computerScore) {
    console.log("🎉 User wins the game!");
} else if (computerScore > userScore) {
    console.log("💻 Computer wins the game!");
} else {
    console.log("🤝 The game is a draw!");
}
