class Player {
  constructor(id, turn, token) {
    this.id = id;
    this.turn = turn;
    this.token = token;
    this.wins = 0;
    this.hasWon = false;
  }

  saveWinsToStorage(myObj) {
    var stringifiedObj =  JSON.stringify(myObj);
    localStorage.setItem('storeMyself', stringifiedObj);
  }

  retrieveWinsFromStorage() {
    var retrieveObj = localStorage.getItem('storeMyself');
    var parsedObj = JSON.parse(retrieveObj);
    return parsedObj;
  }
}