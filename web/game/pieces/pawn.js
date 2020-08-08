class Pawn extends Piece {
  constructor(x, y, d, color) {
    super(x, y, d, color);
  }
  
  draw() {
    let img = loadImage(`/web/game/pieces/assets/${this.color}_pawn.png`);
    let xPos = this.x + tileWidth/2;
    let yPos = this.y + tileHeight/2;
    let xSize = tileWidth * 0.7;
    let ySize = tileHeight * 0.7;
    image(img, xPos, yPos, xSize, ySize);
  }

}