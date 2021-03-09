var game = new Game();

var board = document.querySelector('.board-container');
var header = document.querySelector('.header-container');
var player1Sidebar = document.querySelector('.player1-sidebar');  
var player2Sidebar = document.querySelector('.player2-sidebar');  
var player1Turn = document.querySelector('#player1Turn');
var player2Turn = document.querySelector('#player2Turn');

window.addEventListener('load', pageLoad);
document.addEventListener('click', playGame);


function pageLoad() {
  game.retrieveWins();
  displaySidebar();
};

function determineCell(event) {
  var clickedCell = event.target.closest('.cell');
  return clickedCell;
};

function addToken(token, htmlContainer) {
  htmlContainer.innerHTML += `
    <p class="play-token">${token}</p>
  `
};

function playGame(event) {
  var clickedCell = determineCell(event);
  var player = game.currentPlayer();
  
  if (validCell(event) && !game.gameOver) {
    addToken(player.token, clickedCell);
    displayWhoseTurn();
    game.gameState[clickedCell.id] = game.turn;
    game.detectWinner();
    displayWinner();
    displaySidebar();
    game.switchTurns();
  } 
};

function validCell(event) {
  var clickedCell = event.target.closest('.cell');

  if (clickedCell && game.gameState[clickedCell.id] === "") {
    return true;
  } else {
    return false;
  }
};

function displayWinner() {
  var checkDraw = validateDraw();
  var player = game.currentPlayer();

  if (game.gameOver && !checkDraw) {
    hide (player1Turn);
    hide (player2Turn);
    header.innerHTML += `
      <h1 class="winner">${player.token} won!</h1>
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
