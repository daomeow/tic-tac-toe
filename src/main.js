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

window.addEventListener('load', loadGame);
topLeft.addEventListener('click', function(event) {
  addToken();
  event.preventDefault();
});

function loadGame() {

};

function addToken() {
   console.log('here')
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