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
  console.log(new Piece(mouseX,mouseY,0).getCurrentTile());
}