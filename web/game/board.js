class Board {
  constructor(width, height) {
		this.width = width;
		this.height = height;
	}


	/*
	 * ROWS:
	 * height * 0 / 8 => 1st row
	 * height * 1 / 8 => 2nd row
	 * height * 2 / 8 => 3rd row
	 * height * 3 / 8 => 4th row
	 * height * 4 / 8 => 5th row
	 * height * 5 / 8 => 6th row
	 * height * 6 / 8 => 7th row
	 * height * 7 / 8 => 8th row
	 */

	/**
	 * COLUMNS:
	 * width * 0 / 8 => 1st column
	 * width * 1 / 8 => 2nd column
	 * width * 2 / 8 => 3rd column
	 * width * 3 / 8 => 4th column
	 * width * 4 / 8 => 5th column
	 * width * 5 / 8 => 6th column
	 * width * 6 / 8 => 7th column
	 * width * 7 / 8 => 8th column
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

				if(j === height * 0.125) { // 1/8 === 0.125 === second row
					new Pawn(i,j,'black', blackPawnImg).draw();
				}

				if(j === height * 0.75) { // 6/8 === 0.75 === seventh row
					new Pawn(i,j, 'white', whitePawnImg).draw();
				}

				colored = colored ? false : true;
			}
			colored = colored ? false : true;
		}
	}

	getBoardSize() { // return width / height
		return [width, height];
	}
}