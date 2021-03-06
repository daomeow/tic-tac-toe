var game = new Game();

var topLeft = document.querySelector('#a');
var topMiddle = document.querySelector('#b');
var topRight = document.querySelector('#c');
var middleLeft = document.querySelector('#d');
var middleMiddle = document.querySelector('#e');
var middleRight = document.querySelector('#f');
var bottomLeft = document.querySelector('#g');
var bottomMiddle = document.querySelector('#h');
var bottomRight = document.querySelector('#i');
var player1Turn = document.querySelector('#player1Turn');
var player2Turn = document.querySelector('#player2Turn');

// window.addEventListener('load', loadGame);
topLeft.addEventListener('click', playTopLeft);
topMiddle.addEventListener('click', playTopMiddle);
topRight.addEventListener('click', playTopRight);
middleLeft.addEventListener('click', playMiddleLeft);
middleMiddle.addEventListener('click', playMiddleMiddle);
middleRight.addEventListener('click', playMiddleRight);
bottomLeft.addEventListener('click', playBottomLeft);
bottomMiddle.addEventListener('click', playBottomMiddle);
bottomRight.addEventListener('click', playBottomRight);

function   addToken(token, htmlContainer) {
  htmlContainer.innerHTML += `
    <p class="play-token">${token}</p>
  `
};

function playTopLeft() {
  var token = game.determineTurn();
  
  displayWhoseTurn();
  addToken(token, topLeft);
  game.gameState.splice(0, 1, token);
  game.switchTurns;
};

function playTopMiddle() {
  var token = game.determineTurn();
  
  displayWhoseTurn();
  addToken(token, topMiddle);
  game.gameState.splice(1, 1, token);
  game.switchTurns;
};

function playTopRight() {
  var token = game.determineTurn();
  
  displayWhoseTurn();
  addToken(token, topRight);
  game.gameState.splice(2, 1, token);
  game.switchTurns;
  console.log(game.gameState)
};

function playMiddleLeft() {
  var token = game.determineTurn();
  
  displayWhoseTurn();
  addToken(token, middleLeft);
  game.gameState.splice(3, 1, token);
  game.switchTurns;
};

function playMiddleMiddle() {
  var token = game.determineTurn();
  
  displayWhoseTurn();
  addToken(token, middleMiddle);
  game.gameState.splice(4, 1, token);
  game.switchTurns;
};

function playMiddleRight() {
  var token = game.determineTurn();
  
  displayWhoseTurn();
  addToken(token, middleRight);
  game.gameState.splice(5, 1, token);
  game.switchTurns;
};

function playBottomLeft() {
  var token = game.determineTurn();
  
  displayWhoseTurn();
  addToken(token, bottomLeft);
  game.gameState.splice(6, 1, token);
  game.switchTurns;
};

function playBottomMiddle() {
  var token = game.determineTurn();
  
  displayWhoseTurn();
  addToken(token, bottomMiddle);
  game.gameState.splice(7, 1, token);
  game.switchTurns; 
};

function playBottomRight() {
  var token = game.determineTurn();
  
  displayWhoseTurn();
  addToken(token, bottomRight);
  game.gameState.splice(8, 1, token);
  game.switchTurns;
  console.log(game.gameState)
};

function displayWhoseTurn() {
  if (game.turn) {
    console.log('true')
    show(player2Turn);
    hide(player1Turn);
  } else {
    console.log('false')
    show(player1Turn);
    hide(player2Turn);
  }
}

function markInvalidCell() {
  game.validCell = false;
}

function show(element) {
  element.classList.remove('visibility-hidden');
};

function hide(element) {
  element.classList.add('visibility-hidden');
};

// Play >> event.target
// Check if the game is over 
// Next turn 
// Available squares >> return !this.state.marks[param];

// Tracks clicked cell
// was click valid? 
// Update game's state
// Validate game state > has player won/draw?
// Either stop game or change active player 