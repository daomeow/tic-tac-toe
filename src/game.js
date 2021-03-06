class Game {
  constructor() {
    this.players = [new Player({id: 1, turn: true, token: '🦊'}, 
      new Player({id: 2, turn: false, token:'🐙'}))];
    this.activeSpots = [];
    this.turn = false;
    this.gameOver = false;
    // this.winner = null;
  }
  
  determineTurn() {
    this.switchTurns();
    console.log('made it')
    if (this.turn) {
      return '🦊';
    } else {
      return  '🐙';
    }
  }

  switchTurns() {
    console.log('switch turns')
    this.turn = !this.turn;
    return this.turn;
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