class Game {
  constructor() {
    this.players = [
      new Player(1, true, '🦊'), 
      new Player(2, false, '🐙')
    ];
    this.turn = true;
    this.gameOver = false;
    this.winner = "";
    this.gameState = {a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:""};
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

  switchTurns() {
    this.turn = !this.turn;
  }

  currentPlayer() {
    if (this.turn) {
      return this.players[0];
    } else {
      return this.players[1];
    }
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
        this.winner = this.turn;
        return; 
      } else {
        match = 0;
      }
    }
    this.detectDraw();
  }
  
  detectDraw() {
    var markedSpacesCount = 0;
    
    for (var i in this.gameState) {
      if (this.gameState[i] !== "") {
        markedSpacesCount++;
      }
    }  

    if (markedSpacesCount === 9) {
      this.gameOver = true;
      this.clearGameState();
      this.resetGame();
    }
  }

  saveWin() {
    if (this.gameOver && this.turn) {
      this.players[0].wins += 1;
      this.players[0].saveWinsToStorage();
    } else {
      this.players[1].wins++;
      this.players[1].saveWinsToStorage();
    }    
  }

  retrieveWins() {
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].retrieveWinsFromStorage();
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
};





    


