let board = new Board(width, height);

function setup() {
  createCanvas(width, height);
  board.newGame();
  new Pawn(0,0,0,'white').draw();
}

function draw() {
  


}
