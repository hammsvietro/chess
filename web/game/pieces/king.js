class King extends Piece {
    constructor(x, y, color) {
      super(x, y, color, color === 'white' ? whiteKingImg : blackKingImg);
    }
  }