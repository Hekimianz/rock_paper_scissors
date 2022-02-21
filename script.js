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
    }

    return computersChoice;
}

// Take players selection.
let userSelec = "";
let userSelecLower = "";



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
        message = "You win! Rock beats scissors.";
        userScore++;
    }
    else if (userSelec === "rock" && computersChoice === "rock") {
        message = "Draw! You both chose rock.";
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
    return message;
}

const results = document.querySelector(".resultsDiv");
const userScoreKeeper = document.querySelector(".userScore")
const pcScoreKeeper = document.querySelector(".pcScore")
userScoreKeeper.textContent = userScore;
pcScoreKeeper.textContent = pcScore;
function playRound() {
    computersPlay();
    determineWin(computersChoice, userSelec);
    let p = document.createElement("p");
    p.textContent = message;
    results.appendChild(p);

    userScoreKeeper.textContent = userScore;
    pcScoreKeeper.textContent = pcScore;


    if (userScore === 5) {
        alert("You Win! Great job!");
        pcScore = 0;
        userScore = 0;
        userScoreKeeper.textContent = userScore;
        pcScoreKeeper.textContent = pcScore;
        while (results.firstChild) {
            results.removeChild(results.lastChild);
        }
    }
    else if (pcScore === 5) {
        alert("Aww! You lose! Better luck next time!")
        pcScore = 0;
        userScore = 0;
        userScoreKeeper.textContent = userScore;
        pcScoreKeeper.textContent = pcScore;
        while (results.firstChild) {
            results.removeChild(results.lastChild);
        }
    }
}

const restart = document.querySelector(".restart");
restart.addEventListener("click", function () {
    pcScore = 0;
    userScore = 0;
    userScoreKeeper.textContent = userScore;
    pcScoreKeeper.textContent = pcScore;
    while (results.firstChild) {
        results.removeChild(results.lastChild);
    }
})

const buttons = document.querySelectorAll(".btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (i == 0) {
            userSelec = "rock";
            playRound();
        }
        else if (i == 1) {
            userSelec = "paper";
            playRound();
        }
        else if (i == 2) {
            userSelec = "scissors";
            playRound();
        }
    })
}




