class Game {
  constructor(turn) {
    this.players = [new Player({id: 1, turn: true, token: '🦊'}), 
      new Player({id: 2, turn: false, token:'🐙'})];
    this.activeSpots = [];
    this.turn = turn;
  }
  detectDraw() {
  }
  
  //win conditions
  saveWin() {
  }

  resetGame() {
  }
}