let board = new Board(width, height);

function setup() {
  smooth();
  const gameCanvas = createCanvas(width, height);
  gameCanvas.id('game-canvas');
  board.newGame();
  frameRate(45);
  document.getElementById('game-canvas')
    .addEventListener('contextmenu', event => event.preventDefault());
}

function draw() {
  board.updatePieces();

}

function mousePressed() {
  board.handleMouseClick(mouseX, mouseY);
}