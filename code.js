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
    let choice = prompt("Pick rock, paper, or scissors").toLowerCase();

    //keep asking for a choice untill we get a valid answer
    //valid answers are: "rock", "paper", or "scissors"


    while (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
        choice = prompt("Invalid choice. Please choose 'rock', 'paper', or 'scissors'");
    }
}