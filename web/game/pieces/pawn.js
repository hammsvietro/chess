class Pawn extends Piece {
  constructor(x, y, color, image) {
    super(x, y, color);
    this.image = image;
  }
  
  draw() {
    let xPos = this.x + 5;
    let yPos = this.y + 5;
    let xSize = tileWidth * 0.75;
    let ySize = tileHeight * 0.75;
    image(this.image, xPos, yPos, xSize, ySize);
  }

}