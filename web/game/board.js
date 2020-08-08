class Board {
  constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	newGame() { // create board and prosition pieces
		let colored = false;

		for (let i = 0; i < width; i += width/8) {
			for (let j = 0; j < height; j += height/8) {
				fill(colored ? 255 : 31);
				rect(i, j, width / 8, height/8);

				colored = colored ? false : true;
			}
			colored = colored ? false : true;
		}
	}

	getBoardSize() { // return width / height
		return [width, height];
	}
}