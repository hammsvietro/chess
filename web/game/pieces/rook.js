class Rook extends Piece {
  constructor(x, y, color) {
    super(x, y, color);
  }
  draw() {
    let img = this.color === 'white' ? whiteRookImg : blackRookImg;
    let xPos = this.x + 1.6;
    let yPos = this.y + 1.6;
    let xSize = tileWidth * 0.9;
    let ySize = tileHeight * 0.9;

    image(img, xPos, yPos, xSize, ySize);
  }
}