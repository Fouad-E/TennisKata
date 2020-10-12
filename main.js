/* Tennis game simulator */

const TennisGame = require('./src/TennisGame');

const game = new TennisGame("Rafael Nadal", "Novak Djokovic");
const tabPlayersGaming = [1, 1, 2, 2, 2, 1, 2, 1, 1, 1];

console.log("Starting tennis game ...");
console.log("Players - P1 : "+game.playerOneName+" VS P2 : "+game.playerTwoName+ ", Score : " +game.getScore());
for (var i = 0; i < tabPlayersGaming.length; i++){
    if (tabPlayersGaming[i] == 1) {
        game.playerOneScores();

    } else {
        game.playerTwoScores();
    }
    console.log("Score P1 VS P2 : "+game.getScore());
}
console.log("Tennis game stopped");