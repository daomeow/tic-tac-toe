var game = new Game();

var player1Turn = document.querySelector('#player1Turn');
var player2Turn = document.querySelector('#player2Turn');
var board = document.querySelector('.board-container');

document.addEventListener('click', displayHtml);

function addToken(token, htmlContainer) {
  htmlContainer.innerHTML += `
    <p class="play-token">${token}</p>
  `
};

function displayHtml(event) {
  var clickedCell = event.target.closest('.spot')
  var token = game.determineTurn();

  if (validCell(event)) {
    addToken(token, clickedCell);
    displayWhoseTurn();
    game.gameState[clickedCell.id] = game.turn;
    game.detectWinner();
  } 
};

function validCell(event) {
  var clickedCell = event.target.closest('.spot');

  if (game.gameState[clickedCell.id] === "") {
    return true;
  } else {
    return false;
  }
};

function displayWhoseTurn() {
  if (game.turn) {
    show(player2Turn);
    hide(player1Turn);
  } else {
    show(player1Turn);
    hide(player2Turn);
  }
};

function show(element) {
  element.classList.remove('visibility-hidden');
};

function hide(element) {
  element.classList.add('visibility-hidden');
};
