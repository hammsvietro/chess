class Board {
  constructor(width, height) {
		this.width = width;
		this.height = height;

		//HARDCODED THIS WILL BE FETCHED FROM THE BACKEND
		this.myPieceColor = 'black';
		this.foePieceColor = 'white';
		
		this.tiles = [];

		this.foePieceSet = new PieceSet('foe', this.foePieceColor);
		this.myPieceSet = new PieceSet('me', this.myPieceColor);
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

		

		for (let i = 0, x = 0; i < width; i += width/8, x++) {
			this.tiles.push([]);
			for (let j = 0, y = 0; j < height; j += height/8, y++) {

				if(colored) {
					fill(125, 135, 150);
				} else {
					fill(232, 235, 239);
				}

				this.tiles[x].push(new Tile(i, j, colored, x, y))
				this.tiles[x][y].draw()
				
				// LINK TILES TO PIECES
				if (x === 0) { // foe first row
					switch (y) {
						case 0:
							this.tiles[x][y].addPiece(this.foePieceSet.rooks[0]);
							break;
						
						case 1:
							this.tiles[x][y].addPiece(this.foePieceSet.knights[0]);
							break;
						
						case 2:
							this.tiles[x][y].addPiece(this.foePieceSet.bishops[0]);
							break;
						
						case 3:
							this.tiles[x][y].addPiece(this.foePieceSet.queen);
							break;
						
						case 4:
							this.tiles[x][y].addPiece(this.foePieceSet.king);
							break;
						
						case 5:
							this.tiles[x][y].addPiece(this.foePieceSet.bishops[1]);
							break;
						
						case 6:
							this.tiles[x][y].addPiece(this.foePieceSet.knights[1]);
							break;
						
						case 7:
							this.tiles[x][y].addPiece(this.foePieceSet.rooks[1]);
							break;
					}
				}

				if (x === 1) { // foe pawns
					this.tiles[x][y].addPiece(this.foePieceSet.pawns[y]);
				}

				if (x === 6) { // my pawns
					this.tiles[x][y].addPiece(this.myPieceSet.pawns[y]);
				}

				if(x === 7) { // my first row
					switch (y) {
						case 0:
							this.tiles[x][y].addPiece(this.myPieceSet.rooks[0]);
							break;
						
						case 1:
							this.tiles[x][y].addPiece(this.myPieceSet.knights[0]);
							break;
						
						case 2:
							this.tiles[x][y].addPiece(this.myPieceSet.bishops[0]);
							break;
						
						case 3:
							this.tiles[x][y].addPiece(this.myPieceSet.queen);
							break;
						
						case 4:
							this.tiles[x][y].addPiece(this.myPieceSet.king);
							break;
						
						case 5:
							this.tiles[x][y].addPiece(this.myPieceSet.bishops[1]);
							break;
						
						case 6:
							this.tiles[x][y].addPiece(this.myPieceSet.knights[1]);
							break;
						
						case 7:
							this.tiles[x][y].addPiece(this.myPieceSet.rooks[1]);
							break;
					}
				}

				colored = colored ? false : true;
			}
			colored = colored ? false : true;
		}
		this.placePieces();
	}

	placePieces() {
		this.foePieceSet.draw();
		this.myPieceSet.draw();
		
	}

	getBoardSize() { // return width / height
		return [width, height];
	}

	getTileCoordinatesByPosition(x, y) {
		x = x === width ? x-- : x; 
		y = y === height ? y-- : y;

		let xTile = Math.floor(x/(width/8));
		let yTile = Math.floor(y/(height/8));
		 
		if (xTile < 8 && yTile < 8) {
			return this.tiles[yTile][xTile]
		}

		return null;
	}

	handleMouseClick(mouseX, mouseY){
		console.log(this.getTileCoordinatesByPosition(mouseX, mouseY));
	}
}