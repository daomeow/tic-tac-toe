class Game {
  constructor() {
    this.players = [new Player(1, true, '🦊'), 
      new Player(2, false, '🐙')];
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
      return this.players[0].token;
    } else {
      return this.players[1].token;
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
        this.gameOver = true;
        this.saveWin();
        this.clearGameState();
        this.resetGame();
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
    if (this.gameOver && this.turn) {
      this.players[0].wins++;
    } else {
      this.players[1].wins++;
    }    
  }  

  resetGame() {
    if (this.gameOver) {
      setTimeout(function() {window.location.reload()}, 3000);
    }
  }

  clearGameState() {
    var keys = Object.keys(this.gameState);

    for (keys in this.gameState) {
      if (this.gameState.hasOwnProperty(keys)) {
        this.gameState[keys] = "";
      }
    }
  }
}





    


