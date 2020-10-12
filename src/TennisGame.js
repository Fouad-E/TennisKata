module.exports = class TennisGame {

  constructor(playerOneName, playerTwoName) {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
  }

  /*
    Give the score of the current tennis game
  */
  getScore() {
    if (this.getWinner()) {
      return `${this.maxScorePlayer()} wins`;
    }

    if (this.getAdvantage()) {
      return `Advantage ${this.maxScorePlayer()}`;
    }

    if (this.isDeuce()) { return 'Deuce'; }

    if (this.playerOneScore == this.playerTwoScore) {
      return `${this.displayScore(this.playerOneScore)} all`;
    }

    return `${this.displayScore(this.playerOneScore)}-${this.displayScore(this.playerTwoScore)}`;
  }

  /*
    Give the name of player have the higher score
  */
  maxScorePlayer() {
		if (this.playerOneScore > this.playerTwoScore) {
			return this.playerOneName;
		} else {
			return this.playerTwoName;
		}
	}
  
  /*
    Verify if there is a winner player of this game
  */
	getWinner() {
		if(this.playerTwoScore >= 4 && this.playerTwoScore >= this.playerOneScore + 2 )
			return true;
		if(this.playerOneScore >= 4 && this.playerOneScore >= this.playerTwoScore + 2)
			return true;
		return false;
	}
  
  /*
    Verify if one of those get an advantage game (match point)
  */
	getAdvantage() {
		if (this.playerTwoScore >= 4 && this.playerTwoScore == this.playerOneScore + 1)
			return true;
		if (this.playerOneScore >= 4 && this.playerOneScore == this.playerTwoScore + 1)
			return true;
		
		return false;

	}

  /*
    Add point of player one's score
  */
	playerOneScores() {
		this.playerOneScore++;
  }

  /*
    Add point of player two's score
  */  
  playerTwoScores() {
		this.playerTwoScore++;
	}

  /*
    verify if these players are deuce
  */
  isDeuce() {
    return this.playerOneScore >= 3 && this.playerTwoScore == this.playerOneScore;
  }
 
  /*
    Display a score
  */
  displayScore(score) {
    switch (score) {
      case 0:
        return 'love';
      case 1:
        return 'fifteen';
      case 2:
        return 'thirty';
      case 3:
        return 'forty';
    }
    throw new IllegalArgumentException(`Illegal score: ${this.score}`);
  }

 };
