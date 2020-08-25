class Bishop extends Piece {
    constructor(x, y, color) {
      super(x, y, color, color === 'white' ? whiteBishopImg : blackBishopImg);
    }
  }