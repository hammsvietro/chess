class Board {
  constructor(width, height) {
		this.width = width;
		this.height = height;

		//HARDCODED THIS WILL BE FETCHED FROM THE BACKEND
		this.myPieceColor = 'black';
		this.foePieceColor = 'white';
	}
	


	/*
	 * ROWS:
	 * 	height * 0 / 8 => 1st row
	 * 	height * 1 / 8 => 2nd row
	 * 	height * 2 / 8 => 3rd row
	 * 	height * 3 / 8 => 4th row
	 * 	height * 4 / 8 => 5th row
	 * 	height * 5 / 8 => 6th row
	 * 	height * 6 / 8 => 7th row
	 * 	height * 7 / 8 => 8th row
	 */

	/**
	 * COLUMNS:
	 * 	width * 0 / 8 => 1st column
	 * 	width * 1 / 8 => 2nd column
	 * 	width * 2 / 8 => 3rd column
	 * 	width * 3 / 8 => 4th column
	 * 	width * 4 / 8 => 5th column
	 * 	width * 5 / 8 => 6th column
	 * 	width * 6 / 8 => 7th column
	 *	width * 7 / 8 => 8th column
	 */

	newGame() { // create board and prosition pieces
		let colored = false;

		

		for (let i = 0; i < width; i += width/8) {
			for (let j = 0; j < height; j += height/8) {
				if(colored) {
					fill(125, 135, 150);
				} else {
					fill(232, 235, 239);
				}
				rect(i, j, width / 8, height/8);

				

				colored = colored ? false : true;
			}
			colored = colored ? false : true;
		}
		this.placePieces();
	}

	placePieces() {
		// DRAW FOE PIECES
		new Rook(this.width * 0 / 8,this.height * 0 / 8,this.foePieceColor).draw();
		new Knight(this.width * 1 / 8,this.height * 0 / 8,this.foePieceColor).draw();
		new Bishop(this.width * 2 / 8,this.height * 0 / 8,this.foePieceColor).draw();
		new Queen(this.width * 3 / 8,this.height * 0 / 8,this.foePieceColor).draw();
		new King(this.width * 4 / 8,this.height * 0 / 8,this.foePieceColor).draw();
		new Bishop(this.width * 5 / 8,this.height * 0 / 8,this.foePieceColor).draw();
		new Knight(this.width * 6 / 8,this.height * 0 / 8,this.foePieceColor).draw();
		new Rook(this.width * 7 / 8,this.height * 0 / 8,this.foePieceColor).draw();

		new Pawn(this.width * 0 / 8,this.height * 1 / 8,this.foePieceColor).draw();
		new Pawn(this.width * 1 / 8,this.height * 1 / 8,this.foePieceColor).draw();
		new Pawn(this.width * 2 / 8,this.height * 1 / 8,this.foePieceColor).draw();
		new Pawn(this.width * 3 / 8,this.height * 1 / 8,this.foePieceColor).draw();
		new Pawn(this.width * 4 / 8,this.height * 1 / 8,this.foePieceColor).draw();
		new Pawn(this.width * 5 / 8,this.height * 1 / 8,this.foePieceColor).draw();
		new Pawn(this.width * 6 / 8,this.height * 1 / 8,this.foePieceColor).draw();
		new Pawn(this.width * 7 / 8,this.height * 1 / 8,this.foePieceColor).draw();
		

		// DRAW MY PIECES
		new Rook(this.width * 0 / 8,this.height * 7 / 8,this.myPieceColor).draw();
		new Knight(this.width * 1 / 8,this.height * 7 / 8,this.myPieceColor).draw();
		new Bishop(this.width * 2 / 8,this.height * 7 / 8,this.myPieceColor).draw();
		new Queen(this.width * 3 / 8,this.height * 7 / 8,this.myPieceColor).draw();
		new King(this.width * 4 / 8,this.height * 7 / 8,this.myPieceColor).draw();
		new Bishop(this.width * 5 / 8,this.height * 7 / 8,this.myPieceColor).draw();
		new Knight(this.width * 6 / 8,this.height * 7 / 8,this.myPieceColor).draw();
		new Rook(this.width * 7 / 8,this.height * 7 / 8,this.myPieceColor).draw();

		new Pawn(this.width * 0 / 8,this.height * 6 / 8,this.myPieceColor).draw();
		new Pawn(this.width * 1 / 8,this.height * 6 / 8,this.myPieceColor).draw();
		new Pawn(this.width * 2 / 8,this.height * 6 / 8,this.myPieceColor).draw();
		new Pawn(this.width * 3 / 8,this.height * 6 / 8,this.myPieceColor).draw();
		new Pawn(this.width * 4 / 8,this.height * 6 / 8,this.myPieceColor).draw();
		new Pawn(this.width * 5 / 8,this.height * 6 / 8,this.myPieceColor).draw();
		new Pawn(this.width * 6 / 8,this.height * 6 / 8,this.myPieceColor).draw();
		new Pawn(this.width * 7 / 8,this.height * 6 / 8,this.myPieceColor).draw();
		
	}

	getBoardSize() { // return width / height
		return [width, height];
	}
}