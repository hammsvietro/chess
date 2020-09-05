class Pawn extends Piece {
  constructor(x, y, color) {
    super(x, y, color, color === 'white' ? whitePawnImg : blackPawnImg);
  }
  
  moveTo(x, y) {
    
  }
}