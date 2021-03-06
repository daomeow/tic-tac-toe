// var newGame = new Game(turn);

var topLeft = document.querySelector('#a');
var topMiddle = document.querySelector('#b');
var topRight = document.querySelector('#c');
var middleLeft = document.querySelector('#d');
var middleMiddle = document.querySelector('#e');
var middleRight = document.querySelector('#f');
var bottomLeft = document.querySelector('#g');
var bottomMiddle = document.querySelector('#h');
var bottomRight = document.querySelector('#i');



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
  addToken('🐙', topLeft);
};

function playTopMiddle() {
  addToken('🐙', topMiddle);
};

function playTopRight() {
  addToken('🐙', topRight);
};

function playMiddleLeft() {
  addToken('🐙', middleLeft);
};

function playMiddleMiddle() {
  addToken('🐙', middleMiddle);
};

function playMiddleRight() {
  addToken('🐙', middleRight);
};

function playBottomLeft() {
  addToken('🐙', bottomLeft);
};

function playBottomMiddle() {
  addToken('🐙', bottomMiddle);
};

function playBottomRight() {
  addToken('🐙', bottomRight);
};

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