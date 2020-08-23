class Tile {
  constructor(x, y, colored) {
    this.x = x;
    this.y = y;
    this.colored = colored;
    this.hasPiece = false;
    this.piece = null;
  }

  draw() {
    if(this.colored) {
      fill(125, 135, 150);
    } else {
      fill(232, 235, 239);
    }
    rect(this.x, this.y, width / 8, height/8);
  }

  addPiece(piece) {
    this.hasPiece = true;
    this.piece = piece;
  }

  removePiece() {
    this.hasPiece = false;
    this.piece = null
  }

  hasPiece() {
    return this.hasPiece;
  }

  hasMyPiece(myPieceColor) {
    return this.hasPiece && this.piece.color === myPieceColor;
  }
}