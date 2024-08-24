let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    //if it's a tie, no logic needed
    if (humanChoice === computerChoice) {
        console.log("Tie!");
        console.log(`Current scores are: You: ${humanScore} Computer: ${computerScore}`);
        return;
    }

    //check to see who won
    if (humanChoice === "rock") {
        
    }
}

function roundWin() {
    console.log("You win!");
    console.log(`Current scores are: You: ${++humanScore} Computer: ${computerScore}`);
}

function roundLoss() {
    console.log("You lose :(");
    console.log(`Current scores are: You: ${humanScore} Computer: ${++computerScore}`);
}

function getComputerChoice() {
    //generate a random number between 0 and 2 and assign it to the choice variable
    let choice = Math.floor(Math.random() * 3);

    //if 0, choice is rock. 1 is paper. 2 is scissors

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("oops we messed up making a choice");
            return null;
    }
}

function getHumanChoice() {
    //ask the user to choose their play
    let choice = prompt("Pick rock, paper, or scissors").toLowerCase();

    //if the choice is invalid keep asking for a choice untill we get a valid answer then return it
    //valid answers are: "rock", "paper", or "scissors"
    while (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
        choice = prompt("Invalid choice. Please choose 'rock', 'paper', or 'scissors'").toLowerCase();
    }

    return choice;
}

