class Game {
  constructor() {
    this.players = [new Player({id: 1, turn: true, token: '🦊'}, 
      new Player({id: 2, turn: false, token:'🐙'}))];
    this.activeSpots = [];
    this.turn = false;
    this.gameOver = false;
    this.gameState = {a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:""};
    this.gamePlay = [];
    this.possibleWins = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
      ['a', 'd', 'g'],
      ['b', 'e', 'h'],
      ['c', 'f', 'i'],
      ['a', 'e', 'i'],
      ['c', 'e', 'g']
    ];
  }
  
  determineTurn() {
    this.switchTurns();
    if (this.turn) {
      return '🦊';
    } else {
      return '🐙';
    }
  }
  
  switchTurns() {
    this.turn = !this.turn;
    return this.turn;
  }

  playerCells() {
    var checkCells = []; 
    for (var i in this.gameState) {
      if (this.gameState[i] === this.turn) {
        checkCells.push(i);
      }
    }
    // checkCells.sort();
    // console.log(checkCells);
    return checkCells;
  }  

  detectWinner() {
    var playerSpots = this.playerCells();
    var match = 0;

    for (var i = 0; i < this.possibleWins.length; i++) {
      for (var m = 0; m < playerSpots.length; m++) {
        if (this.possibleWins[i].includes(playerSpots[m])) {
          match++;
        }
      }
      if (match === 3) {
        console.log('winner')
        return;
      } else {
        match = 0;
      }
    } 
  }

  detectDraw() {
  // No empty strings within this.gameState
  }
  
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





    


