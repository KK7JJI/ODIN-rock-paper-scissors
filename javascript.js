function Player(playerType) {
    this.playerType = playerType; //0 = human, 1 = computer
    this.playerChoice = "Not Selected"; //0 Rock, 1 Paper, 2 Scissors
    this.playerScore = 0; //count of the number of wins
}

const player1 = new Player(0);
const player2 = new Player(1);

let i = 1;
let winner = "New Game";
let choices = [
    "Rock",
    "Paper",
    "Scissors"
];

const gameMessage = document.querySelector(".container.game-message");
const matchMessage = document.querySelector(".container.match-message");
const player1Choice = document.querySelector(".player1.choice");
const player2Choice = document.querySelector(".player2.choice");
const player1Score = document.querySelector(".player1.current-score");
const player2Score = document.querySelector(".player2.current-score");
const h2Round = document.querySelector(".h2-round");
resetGame();

const gameReset = document.querySelector(".reset-button");
gameReset.addEventListener('click',(e) => resetGame());
const userButtons = document.querySelector(".player-choices");
userButtons.addEventListener('click', (e) => getButtonValue(e));



function getButtonValue(e) {

    if ((parseFloat(player1.playerScore) < 5) && ((parseFloat(player2.playerScore)) < 5)) {
        playMatch(e.target.innerText);
    } else {
        alert("Game Over, press \"New Game\" to restart it.")
    }
}

function resetGame() {
    console.log("reseting game for new match . . .");
    player1.playerScore = 0;
    player2.playerScore = 0;
    player1.playerChoice = "Not Selected";
    player2.playerChoice = "Not Selected";
    matchMessage.textContent = "";
    matchMessage.classList.add("clear-borders");
    h2Round.textContent = "Round 1";
    showPlayerChoices();
    showPlayerScores();
    showGameWinner();
    console.log("match reset completed.");
}

function showPlayerChoices() {
    if (player1.playerChoice == "Not Selected") {
        player1Choice.textContent = "Player 1: Make Your Choice!";
    } else {
        player1Choice.textContent = "Player 1: " + choices[player1.playerChoice];
    }
    if (player2.playerChoice == "Not Selected") {
        player2Choice.textContent = "Player 2: Make Your Choice!";
    } else {
        player2Choice.textContent = "Player 2: " + choices[player2.playerChoice];
    }
}

function showMatchWinner(winner) {
    matchMessage.classList.remove("clear-borders");
    matchMessage.classList.remove("green-theme");
    matchMessage.classList.remove("red-theme");
    matchMessage.classList.remove("black-theme");
    matchMessage.textContent = ""

    if (winner == "Player 1") {
        matchMessage.classList.add("green-theme");
        matchMessage.textContent = "You win!"
    } else if (winner == "Player 2") {
        matchMessage.classList.add("red-theme");
        matchMessage.textContent = "You lose!"
    } else if (winner == "Tie Game") {
        matchMessage.classList.add("black-theme");
        matchMessage.textContent = "Tie Game, try again.";
    }
}

function showPlayerScores() {
    player1Score.textContent = "Player 1: " + player1.playerScore;
    player2Score.textContent = "Player 2: " + player2.playerScore;
}

function showGameWinner() {
    gameMessage.classList.remove("clear-borders");
    gameMessage.classList.remove("green-theme");
    gameMessage.classList.remove("red-theme");
    gameMessage.classList.remove("black-theme");
    gameMessage.textContent = "";

    if (player1.playerScore == 5) {
        gameMessage.classList.add("green-theme");
        gameMessage.textContent = "GAME OVER, YOU WIN!";
    } else if (player2.playerScore == 5) {
        gameMessage.classList.add("red-theme");
        gameMessage.textContent = "GAME OVER, YOU LOSE!";
    } else {
        gameMessage.classList.add("clear-borders");
        gameMessage.textContent = "";
    }
}

function playMatch(playerChoice) {

    /*  print the initial round heading.

        NOTE, winner is determined by the function
        evaluateMatchWinner()
        if the function returns "Tie Game" then
        we suppress printing the header.
    */

    if (playerChoice == "Random Selection") {
        player1.playerChoice = computerChoice();
    } else {
        player1.playerChoice = choices.findIndex((elem) => elem == playerChoice);
    }
    player2.playerChoice = computerChoice();

    showPlayerChoices();

    // evaluate both choices and determine a winner.
    // if it's a tie then we redo the round.
    winner = evaluateMatchWinner();

    if (winner=="Tie Game") {
        console.log("Tie Game, try again.");
    } else {
        updatePlayerScores(winner);
    }

    showPlayerScores();
    showMatchWinner(winner);
    showGameWinner();
    i += 1;
    h2Round.textContent = "Round " + i;

}

function computerChoice() {
    return Math.floor(Math.random() * 3);
}

function updatePlayerScores(winner) {
    // tally wins for each player.
    if (winner == "Player 1") {
        player1.playerScore += 1;
    } else if (winner == "Player 2") {
        player2.playerScore += 1;
    }
}

function evaluateMatchWinner() {
    /*  In the game of rock, paper, scissors:
        - paper beats rock
        - rock beats scissors
        - scissors beats paper

        Each player combination is evaluated individually.
    */

    if (player1.playerChoice == 0) { // rock
        if (player2.playerChoice == 0) { // rock
            return "Tie Game";
        }
        else if (player2.playerChoice == 1) { // paper
            return "Player 2";
        }
        else if (player2.playerChoice == 2) { // scissor
            return "Player 1";
        }

    }

    else if (player1.playerChoice == 1) { // paper
        if (player2.playerChoice == 0) { // rock
            return "Player 1";
        }
        else if (player2.playerChoice == 1) { // paper
            return "Tie Game";
        }
        else if (player2.playerChoice == 2) { // scissor
            return "Player 2";
        }

    }

    else if (player1.playerChoice == 2) {  // scissors
        if (player2.playerChoice == 0) { // rock
            return "Player 2";
        }
        else if (player2.playerChoice == 1) { // paper
            return "Player 1";
        }
        else if (player2.playerChoice == 2) { // scissor
            return "Tie Game";
        }

    }
}