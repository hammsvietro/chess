class Knight extends Piece {
    constructor(x, y, color) {
      super(x, y, color, color === 'white' ? whiteKnightImg : blackKnightImg);
    }
  }