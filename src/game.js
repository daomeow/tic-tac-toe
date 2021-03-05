class Game {
  constructor(turn) {
    this.players = [new Player({id: 1, turn: true, token: '🦊'}, 
      new Player({id: 2, turn: false, token:'🐙'}))];
    this.activeSpots = [];
    this.turn = turn;
    this.gameOver = false;
    this.winner = null;
  }
  
  displayTurn() {

  }

  detectDraw() {
  }
  
  //win conditions
  saveWin() {
    if (this.player[0].hasWon) {
      this.player[0].wins++;
    } else {
      this.player[1].wins++;
    }
  } 

  resetGame() {
  }
}