class Player {
  constructor(id, turn, token) {
    this.id = id;
    this.turn = turn;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    var stringifiedWin =  JSON.stringify(this.wins);
    localStorage.setItem(`player ${this.id}`, stringifiedWin);
  }

  retrieveWinsFromStorage() {
    var retrieveWin = localStorage.getItem(`player ${this.id}`);
    var parsedWin = JSON.parse(retrieveWin) || 0;
    this.wins = parsedWin;
  }
}
