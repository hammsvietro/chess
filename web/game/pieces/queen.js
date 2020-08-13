class Queen extends Piece {
    constructor(x, y, color, image) {
      super(x, y, color, image);
    }
    draw() {
      let img = this.color === 'white' ? whiteQueenImg : blackQueenImg;
      let xPos = this.x + 1.6;
    let yPos = this.y + 1.6;
    let xSize = tileWidth * 0.9;
    let ySize = tileHeight * 0.9;

      image(img, xPos, yPos, xSize, ySize);
  }
  }