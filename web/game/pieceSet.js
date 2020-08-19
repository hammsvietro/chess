class PieceSet {
  constructor(bearer,color) {
    this.bearer = bearer;
    this.color = color;

    if(this.bearer === 'foe') {

      this.pawns = [
        new Pawn(width * 0 / 8, height * 1 / 8,this.color),
        new Pawn(width * 1 / 8, height * 1 / 8,this.color),
        new Pawn(width * 2 / 8, height * 1 / 8,this.color),
        new Pawn(width * 3 / 8, height * 1 / 8,this.color),
        new Pawn(width * 4 / 8, height * 1 / 8,this.color),
        new Pawn(width * 5 / 8, height * 1 / 8,this.color),
        new Pawn(width * 6 / 8, height * 1 / 8,this.color),
        new Pawn(width * 7 / 8, height * 1 / 8,this.color),
      ];

      this.rooks = [
        new Rook(width * 0 / 8, height * 0 / 8,this.color),
        new Rook(width * 7 / 8, height * 0 / 8,this.color),
      ];

      this.knights = [
        new Knight(width * 1 / 8, height * 0 / 8,this.color),
        new Knight(width * 6 / 8, height * 0 / 8,this.color),
      ];

      this.bishops = [
        new Bishop(width * 2 / 8, height * 0 / 8,this.color),
        new Bishop(width * 5 / 8, height * 0 / 8,this.color),
      ]

      this.queen = new Queen(width * 3 / 8, height * 0 / 8,this.color);
      

      this.king = new King(width * 4 / 8, height * 0 / 8,this.color);
    }

    else if (this.bearer === 'me') {
      this.pawns = [
        new Pawn(width * 0 / 8, height * 6 / 8,this.color),
        new Pawn(width * 1 / 8, height * 6 / 8,this.color),
        new Pawn(width * 2 / 8, height * 6 / 8,this.color),
        new Pawn(width * 3 / 8, height * 6 / 8,this.color),
        new Pawn(width * 4 / 8, height * 6 / 8,this.color),
        new Pawn(width * 5 / 8, height * 6 / 8,this.color),
        new Pawn(width * 6 / 8, height * 6 / 8,this.color),
        new Pawn(width * 7 / 8, height * 6 / 8,this.color),
      ];

      this.rooks = [
        new Rook(width * 0 / 8, height * 7 / 8,this.color),
        new Rook(width * 7 / 8, height * 7 / 8,this.color),
      ];

      this.knights = [
        new Knight(width * 1 / 8, height * 7 / 8,this.color),
        new Knight(width * 6 / 8, height * 7 / 8,this.color),
      ];

      this.bishops = [
        new Bishop(width * 2 / 8, height * 7 / 8,this.color),
        new Bishop(width * 5 / 8, height * 7 / 8,this.color),
      ];

      this.queen = new Queen(width * 3 / 8, height * 7 / 8,this.color);
      

      this.king = new King(width * 4 / 8, height * 7 / 8,this.color);
    }
  }

  draw() {
    console.log(this.pawns[0]);
    this.pawns.forEach(pawn => pawn.draw());
    this.rooks.forEach(rook => rook.draw());
    this.knights.forEach(knight => knight.draw());
    this.bishops.forEach(bishop => bishop.draw());
    this.queen.draw();
    this.king.draw();
  }
  
}