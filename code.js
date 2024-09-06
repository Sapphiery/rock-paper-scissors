playGame();

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;
    
    //play 5 rounds of the game
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    //after 5 rounds, print final scores
    if (humanScore > computerScore) {
        console.log(`You win the game! Final scores: You: ${humanScore} Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose the game :( Final scores: You: ${humanScore} Computer: ${computerScore}`);
    } else {
        console.log(`The game ended in a tie. Final scores: You: ${humanScore} Computer: ${computerScore}`);
    }
    
    function playRound(humanChoice, computerChoice) {

        //if it's a tie, no logic needed
        if (humanChoice === computerChoice) {
            console.log("Tie!");
            console.log(`Current scores are: You: ${humanScore} Computer: ${computerScore}`);
        }
    
        //check to see who won if it's not a tie
        else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                roundWin(humanChoice, computerChoice);
            } else if (computerChoice === "paper") {
                roundLoss(humanChoice, computerChoice);
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                roundWin(humanChoice, computerChoice);
            } else if (computerChoice === "scissors") {
                roundLoss(humanChoice, computerChoice);
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                roundWin(humanChoice, computerChoice);
            } else if (computerChoice === "rock") {
                roundLoss(humanChoice, computerChoice);
            }
        }
    }

    //helper function to handle printing scores at the end of a round on win
    function roundWin(humanChoice, computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        console.log(`Current scores are: You: ${++humanScore} Computer: ${computerScore}`);
    }
    
    //helper function to handle printing scores at the end of a round on loss
    function roundLoss(humanChoice, computerChoice) {
        console.log(`You lose :( ${computerChoice} beats ${humanChoice}`);
        console.log(`Current scores are: You: ${humanScore} Computer: ${++computerScore}`);
    }
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

