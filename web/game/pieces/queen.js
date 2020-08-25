class Queen extends Piece {
    constructor(x, y, color) {
      super(x, y, color, color === 'white' ? whiteQueenImg : blackQueenImg);
    }
  }