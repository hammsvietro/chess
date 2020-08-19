class Tile {
  constructor(x, y, colored) {
    this.x = x;
    this.y = y;
    this.colored = colored;
    this.hasPiece = false;
    this.piece = null;
  }

  addPiece(piece) {
    this.hasPiece = true;
    this.piece = piece;
  }

  hasPiece() {
    return this.hasPiece;
  }

  hasMyPiece(myPieceColor) {
    return this.hasPiece && this.piece.color === myPieceColor;
  }

}