var game = new Game();

var player1Turn = document.querySelector('#player1Turn');
var player2Turn = document.querySelector('#player2Turn');
var header = document.querySelector('.header-container');
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

  if (validCell(event) && !game.gameOver) {
    addToken(token, clickedCell);
    displayWhoseTurn();
    game.gameState[clickedCell.id] = game.turn;
    game.detectWinner();
    displayWinner();
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

function displayWinner() {
  if (game.gameOver && game.turn) {
    hide (player2Turn);
    header.innerHTML += `
    <h1 class="winner">🦊 won!</h1>
    `
  } else if (game.gameOver && !game.turn) {
    hide(player1Turn);
    header.innerHTML += `
    <h1 class="winner">🐙 won!</h1>
    `
  }
}

function show(element) {
  element.classList.remove('visibility-hidden');
};

function hide(element) {
  element.classList.add('visibility-hidden');
};
