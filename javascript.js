playgame();

function playgame() {

    // game initializing steps.

    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    // define players
    function Player(playerType) {
        this.playerType = playerType; //0 = human, 1 = computer
        this.playerChoice = 0; //0 Rock, 1 Paper, 2 Scissors
        this.playerScore = 0; //count of the number of wins
    }

    const player1 = new Player(+selectGameMode());
    const player2 = new Player(1);
    const gameMatchCountTotal = 5; // total number of matches to be played in a set.

    // rounds are executed in a while loop.  The round counter increments by 1 for 
    // each round that does not result in a tie.

    let i = 0
    while (i < gameMatchCountTotal) {
        playRound()
    
        if (winner == "Tie Game") {
            console.log("Tie Game, rerunning this match.");
        } else {
            logMatchWinner();
            i = i + 1;
            // print the next round heading.  It's here because 
            // we don't want it to print when a match results in a tie.
            (i > 0 && i < gameMatchCountTotal) ? console.log(`Begin Round ${i+1}`) : 0;
        }
    }
    
    // Show final scores and declare a winner.
    logGameWinner();

    //********************************************************* */
    // playgame functions follow, all are called within playGame.
    //********************************************************* */

    function playRound() {
        // print the initial round heading.
        if (i == 0) {
            console.log(`Begin Round ${i+1}`);
        }

        if (player1.playerType == 0) {
            player1.playerChoice = humanChoice();
        } else {
            player1.playerChoice = computerChoice();
        }
        console.log(`Player 1 chooses: ${choices[player1.playerChoice]}, ${player1.playerChoice}`);

        player2.playerChoice = computerChoice();
        console.log(`Player 2 chooses: ${choices[player2.playerChoice]}, ${player2.playerChoice}`);

        winner = evaluateMatchWinner();
        (!(winner == "Tie Game")) ? updatePlayerScores(winner) : 0;

    }

    function selectGameMode() {
        return +prompt("0 = Player v Computer, 1 = Computer v Computer");

    }

    function computerChoice() {
        return Math.floor(Math.random() * 3);

    }

    function humanChoice() {
        return +prompt("Enter a number; 0 = Rock, 1 = Paper, 2 = Scissors");

    }

    function updatePlayerScores(winner) {
        if (winner == "Player 1") {
            player1.playerScore += 1;
        } else if (winner == "Player 2") {
            player2.playerScore += 1;
        }
    }

    function evaluateGameWinner() {
        // no tie values, this is a best of 5 match winner.
        if (player1.playerScore > player2.playerScore) {
            return "Player 1";
        } else {
            return "Player 2";
        }
    }

    function evaluateMatchWinner() {

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

    function logMatchWinner() {

        console.log(`Round ${i+1} completed:`);
        console.log("The scores are:");
        console.log(`Player 1: ${player1.playerScore} wins.`);
        console.log(`Player 2: ${player2.playerScore} wins.`);
        console.log("-------------------------");
    }

    function logGameWinner() {
        console.log("");
        console.log("*************************");
        console.log("Game Over.");
        console.log("Final Score:");
        if (player1.playerType == 0) {
            console.log(`Player 1: ${player1.playerScore}. (NOTE: Human Player)`)
        } else {
            console.log(`Player 1: ${player1.playerScore}. (NOTE: Computer Player)`)

        }
        console.log(`Player 2: ${player2.playerScore}. (NOTE: I'm always a computer player.)`);
        console.log(`${evaluateGameWinner()} wins the game.`);
        console.log("*************************");

    }
}