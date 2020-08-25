let board;

function setup() {
  
  smooth();
  const gameCanvas = createCanvas(width, height);
  gameCanvas.id('game-canvas');
  board = new Board(width, height);
  board.newGame();
  frameRate(45);
  document.getElementById('game-canvas')
    .addEventListener('contextmenu', event => event.preventDefault());
}

function draw() {
  clear();
  board.updatePieces();

}

function mousePressed() {
  board.handleMouseClick(mouseX, mouseY);
}