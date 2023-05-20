const prompt = require("prompt-sync")();

//user's choice
const getUserChoice = (userInput) => {
    var choices = ["rock", "paper", "scissor"];
    if (choices.includes(userInput)) {
        return userInput;
    }
    console.log("Error: Please, Enter correct keyword");
};
// computer choice
const getComputerChoice = () => {
    var randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissor";
    }
};
//decide winner

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("The game was a Tie!");
    } 
    else if (userChoice === "rock") {
        switch (computerChoice) {
            case "paper":
                return "Computer Won!";
            default:
                return "User Won!";
        }
    } 
    else if (userChoice === "paper") {
        switch (computerChoice) {
            case "scissor":
                return "Computer Won!";
            default:
                return "User Won!";
        }
    } 
    else if (userChoice === "scissor") {
        switch (computerChoice) {
            case "rock":
                return "Computer Won!";
            default:
                return "User Won!";
        }
    }
}

//play game
function playGame() {
    //user inputs through prompt
    let userInput = prompt(
        "Enter your choice: 'Rock' | 'Paper' | 'Scissor'"
    );
    //Cheat code 'bomb' applied!!
    if (userInput === "bomb") {
        console.log("User Wins!");
    } else {
        // without Cheat-code!!
        var userChoice = getUserChoice(userInput.toLowerCase());
        console.log("User Choice: ", userChoice);
        var computerChoice = getComputerChoice();
        console.log("Computer Choice: ", computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
    }
}

playGame();