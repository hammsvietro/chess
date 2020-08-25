class Piece {
    constructor(x, y, color, image) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.image = image;
        this.dragged = false;
    }

    getCurrentTile() {
        // Avoid tile from being 8
        this.x = this.x === width ? this.x-- : this.x; 
        this.y = this.y === height ? this.y-- : this.y;

        let xTile = Math.floor(this.x/(width/8));
        let yTile = Math.floor(this.y/(height/8));

        return [xTile, yTile];
    }

    registerInTile(tile) {
        tile.addPiece(this);
    }

    draw() {
        let img = this.image;
        let xPos = this.x + 4;
        let yPos = this.y + 2.5;
        let xSize = tileWidth * 0.9;
        let ySize = tileHeight * 0.9;
  
        image(img, xPos, yPos, xSize, ySize);
    }
    
}