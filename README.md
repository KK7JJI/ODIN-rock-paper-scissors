# TOP Rock, Paper, Scissors console game.

My solution to the rock, paper, scissors project reference:\
\
https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
\
\
In general this is a javascript implementation of rock, paper, scissors.\
\
On start up a human player plays agains the computer, the human makes selections using labeled buttons.
Computer selection automatically follows;\
\
    - 0 rock\
    - 1 paper\
    - 2 scissors\
\
Rock beats Scissors\
Paper beats Rock\
Scissors beats Paper\
\
A game is played until one player wins a total of 5 matches.  The first player to win 5 matches wins the game.
\
At the end of each match a winner is identified and the player score is updated.\
\
At the end of the game\
    - a game winner is identified, human wins in green, computer wins in red.\
    - player scores are printed.\
\
If a player attempts to play after the game has ended an alert is displayed reminding the player to 
start a new game.
\
NOTE: In the event of a tie (i.e. rock vs rock) the match is repeated until a winner 
is identified.
