let board = new Board(width, height);

function setup() {
  smooth();
  createCanvas(width, height);
  board.newGame();
  frameRate(45);
  
}

function draw() {



}

function mousePressed() {
  console.log(board.getTileCoordinatesByPosition(mouseX, mouseY));
}