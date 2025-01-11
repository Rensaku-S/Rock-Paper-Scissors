let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let computerMove;

    if (number === 0) {
        computerMove = "rock";
    } else if (number === 1) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }

    return computerMove;
}

function getHumanChoice() {
    let humanMove = prompt("Choose your favorite move: rock, paper or scissors", "Rock");
    if(humanMove==null){
        return "rock"
    } else {
        return humanMove.toLowerCase();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Human won");
        humanScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Computer won");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Computer won");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Human won");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Human won");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Computer won");
        computerScore += 1;
    }
}

function playGame() {
    let x = 1;
    while (x <= 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        x += 1;
    }
    if(humanScore == computerScore){
        console.log("It's a Tie")
    } else if(humanScore > computerScore){
        console.log("You won!")
    } else if(humanScore < computerScore){
        console.log("Computer won...")
    }

}

playGame();
