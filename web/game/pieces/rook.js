class Rook extends Piece {
  constructor(x, y, color) {
    super(x, y, color, color === 'white' ? whiteRookImg : blackRookImg);
  }
}