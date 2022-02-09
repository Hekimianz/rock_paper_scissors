// Make the computers play.
let computersChoice = "";
function computersPlay() {
    let choices = [
        "rock",
        "paper",
        "scissors"
    ]

    let computersIndex = Math.floor(Math.random() * choices.length);
    if (computersIndex === 0) {
        computersChoice = "rock";
    }
    else if (computersIndex === 1) {
        computersChoice = "paper";
    }
    else if (computersIndex === 2) {
        computersChoice = "scissors";

    }
    else {
        console.log("Something has gone wrong, please refresh and try again.");
    }
    console.log("Computer: " + computersChoice);
    return computersChoice;
}

// Take players selection.
let userSelec = "";
let userSelecLower = "";
function userSelection() {
    userSelec = prompt("Choose wisely: Rock, Paper or Scissors?");
    userSelecLower = userSelec.toLowerCase();
    console.log("user: " + userSelecLower);
    return userSelecLower;
}


// Compare computers play and players selection and throw out a message declaring win or lose condititon.
let message = "";
let userScore = 0;
let pcScore = 0;
function determineWin(computersChoice, userSelec) {
    if (userSelec === "rock" && computersChoice === "paper") {
        message = "You lose! Paper beats rock.";
        pcScore++;
    }
    else if (userSelec === "rock" && computersChoice === "scissors") {
        message = "You win! Rock beats scissors."
        userScore++;
    }
    else if (userSelec === "rock" && computersChoice === "rock") {
        message = "Draw! You both chose rock."
    }
    else if (userSelec === "paper" && computersChoice === "rock") {
        message = "You win! Paper beats rock.";
        userScore++;
    }
    else if (userSelec === "paper" && computersChoice === "paper") {
        message = "Draw! You both chose paper.";
    }
    else if (userSelec === "paper" && computersChoice === "scissors") {
        message = "You lose! Scissors beats paper.";
        pcScore++;
    }
    else if (userSelec === "scissors" && computersChoice === "rock") {
        message = "You lose! Rock beats scissors.";
        pcScore++;
    }
    else if (userSelec === "scissors" && computersChoice === "paper") {
        message = "You win! Scissors beats rock.";
        userScore++;
    }
    else if (userSelec === "scissors" && computersChoice === "scissors") {
        message = "Draw! You both chose scissors.";
    }
    else {
        message = "Something has gone wrong, please refresh and try again";
    }
    console.log(message);
    console.log("************************************************************************")
    return message;
}
function playRound() {
    userSelection();
    computersPlay();
    determineWin(computersChoice, userSelecLower);
}



// Create a game that plays 5 rounds of previous steps.
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (userScore > pcScore) {
        console.log("You win!");
        console.log("Your Score: " + userScore);
        console.log("Computer's Score: " + pcScore);
    }
    else if (userScore < pcScore) {
        console.log("You lose!")
        console.log("Your Score: " + userScore);
        console.log("Computer's Score: " + pcScore);
    }
    else if (pcScore === userScore) {
        console.log("Draw!");
        console.log("Your Score: " + userScore);
        console.log("Computer's Score: " + pcScore);
    }
    else {
        console.log("Something has gone terribly wrong. please refresh and try again.");
    }

}

game();