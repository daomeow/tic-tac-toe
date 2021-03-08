var game = new Game();

var player1Turn = document.querySelector('#player1Turn');
var player2Turn = document.querySelector('#player2Turn');
var header = document.querySelector('.header-container');
var board = document.querySelector('.board-container');
var player1Sidebar = document.querySelector('.player1-sidebar');  
var player2Sidebar = document.querySelector('.player2-sidebar');  

window.addEventListener('load', displaySidebar);
document.addEventListener('click', gamePlay);

function determineCell(event) {
  var clickedCell = event.target.closest('.spot');
  return clickedCell;
};

function addToken(token, htmlContainer) {
  htmlContainer.innerHTML += `
    <p class="play-token">${token}</p>
  `
};

function gamePlay(event) {
  var clickedCell = determineCell(event);
  var token = game.determineTurn();

  if (validCell(event) && !game.gameOver) {
    addToken(token, clickedCell);
    displayWhoseTurn();
    game.gameState[clickedCell.id] = game.turn;
    game.detectWinner();
    displayHeader();
    displaySidebar();
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

function displayHeader() {
  var checkDraw = validateDraw();

  if (game.gameOver && game.winner && !checkDraw) {
    hide (player2Turn);
    header.innerHTML += `
      <h1 class="winner">🦊 won!</h1>
    `
  } else if (game.gameOver && !game.winner && !checkDraw) {
    hide(player1Turn);
    header.innerHTML += `
      <h1 class="winner">🐙 won!</h1>
    `
  }
};

function validateDraw() {
  if (game.gameOver && game.winner === "") {
    hide(player1Turn);
    hide (player2Turn);
    header.innerHTML += `
      <h1 class="winner">It's a draw!</h1>
    `
    return true;
  } else {
    return false;
  } 
};

function createWins(htmlContainer, token, wins) {
  htmlContainer.innerHTML = `
    <h2>${token}</h2>
    <h3 class="player1-wins">${wins} wins!</h3>
  `
};

function displaySidebar() {
  createWins(player1Sidebar, game.players[0].token, game.players[0].wins);
  createWins(player2Sidebar, game.players[1].token, game.players[1].wins);
};

function show(element) {
  element.classList.remove('visibility-hidden');
};

function hide(element) {
  element.classList.add('visibility-hidden');
};
