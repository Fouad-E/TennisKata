const TennisGame = require('./../TennisGame');

test('Firt game should return "love all"', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    score = game.getScore();
    expect(score).toBe("love all");
});

test('Player 1 wins first ball', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    game.playerOneScores();
    score = game.getScore();
    expect(score).toBe("fifteen-love");
});

test('fifteen all', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    game.playerOneScores();
    game.playerTwoScores();

    score = game.getScore();
    expect(score).toBe("fifteen all");
});

test('Player 2 wins first two balls', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    buildScore(0, 2, game);
    score = game.getScore();
    expect(score).toBe("love-thirty");
});

test('Player 1 wins first three balls', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    buildScore(3, 0, game);
    score = game.getScore();
    expect(score).toBe("forty-love");
});

test('Players are deuce', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    buildScore(3, 3, game);
    score = game.getScore();
    expect(score).toBe("Deuce");
});

test('Player 1 wins game', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    buildScore(4, 0, game);
    score = game.getScore();
    expect(score).toBe("Rafael Nadal wins");
});

test('Player 2 wins game', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    buildScore(1, 4, game);
    score = game.getScore();
    expect(score).toBe("Novak Djokovic wins");
});

test('Players are deuce with 4', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    buildScore(4, 4, game);
    score = game.getScore();
    expect(score).toBe("Deuce");
});

test('player 2 gets advantage', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    buildScore(4, 5, game);
    score = game.getScore();
    expect(score).toBe("Advantage Novak Djokovic");
});

test('Player 1 gets advantage', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    buildScore(5, 4, game);
    score = game.getScore();
    expect(score).toBe("Advantage Rafael Nadal");
});

test('Player 2 wins', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    buildScore(2, 4, game);
    score = game.getScore();
    expect(score).toBe("Novak Djokovic wins");
});

test('Player 2 wins after getting advantage', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    buildScore(6, 8, game);
    score = game.getScore();
    expect(score).toBe("Novak Djokovic wins");
});

test('Player 1 wins after advantage', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");

    buildScore(8, 6, game);
    score = game.getScore();
    expect(score).toBe("Rafael Nadal wins");
});

test('Tennis game between player 1 and player 2 and player 1 wins', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");
    game.playerOneScores();
    expect(game.getScore()).toBe("fifteen-love");
    game.playerOneScores();
    expect(game.getScore()).toBe("thirty-love");
    game.playerTwoScores();
    expect(game.getScore()).toBe("thirty-fifteen");
    expect(game.maxScorePlayer()).toBe("Rafael Nadal");
    game.playerOneScores();
    expect(game.getScore()).toBe("forty-fifteen");
    expect(game.getAdvantage()).toBeFalsy();
    expect(game.getWinner()).toBeFalsy();
    game.playerOneScores();
    expect(game.getAdvantage()).toBeFalsy();
    expect(game.getScore()).toBe("Rafael Nadal wins");
    expect(game.getWinner()).toBeTruthy();
});


test('Tennis game between player 1 and player 2 and player 1 wins with advantage', () => {
    const game = new TennisGame("Rafael Nadal", "Novak Djokovic");
    game.playerOneScores();
    expect(game.getScore()).toBe("fifteen-love");
    game.playerOneScores();
    expect(game.getScore()).toBe("thirty-love");
    game.playerTwoScores();
    expect(game.getScore()).toBe("thirty-fifteen");
    expect(game.maxScorePlayer()).toBe("Rafael Nadal");
    game.playerTwoScores();
    expect(game.getScore()).toBe("thirty all");
    game.playerOneScores();
    expect(game.getScore()).toBe("forty-thirty");
    expect(game.isDeuce()).toBeFalsy();
    expect(game.getAdvantage()).toBeFalsy();
    expect(game.getWinner()).toBeFalsy();
    game.playerTwoScores();
    expect(game.getAdvantage()).toBeFalsy();
    expect(game.getWinner()).toBeFalsy();
    expect(game.isDeuce()).toBeTruthy();
    game.playerOneScores();
    expect(game.getAdvantage()).toBeTruthy();
    expect(game.getWinner()).toBeFalsy();
    game.playerOneScores();
    expect(game.getScore()).toBe("Rafael Nadal wins");
    expect(game.getWinner()).toBeTruthy();
});

function buildScore(playerOneBalls,playerTwoBalls, game) {
    for (var i = 0; i < playerOneBalls; i++) {
        game.playerOneScores();
    }
    for (var i = 0; i < playerTwoBalls; i++) {
        game.playerTwoScores();
    }
}

