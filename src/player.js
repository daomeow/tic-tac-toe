class Player {
  constructor(id, turn, token) {
    this.id = id;
    this.turn = turn;
    this.token = token;
    this.wins = 0;
    this.hasWon = false;
  }

  saveWinsToStorage() {
    var winToStore = this.wins;
    var stringifiedWin =  JSON.stringify(winToStore);
    localStorage.setItem(`player ${this.id}`, stringifiedWin);
  }

  retrieveWinsFromStorage() {
    var retrieveWin = localStorage.getItem('storeMyself');
    var parsedWin = JSON.parse(retrieveWin);
    return parsedWin;
  }
}
