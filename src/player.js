class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
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