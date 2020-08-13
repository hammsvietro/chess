class Piece {
    constructor(x, y, color, image) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.image = image;
    }

    getCurrentTile() {
        // Avoid tile from being 8
        x = x === width ? x-- : x; 
        y = y === height ? y-- : y;

        let xTile = Math.floor(this.x/(width/8));
        let yTile = Math.floor(this.y/(height/8));

        return [xTile, yTile];
    }

    draw() {
        let xPos = this.x + 5;
        let yPos = this.y + 5;
        let xSize = tileWidth * 0.75;
        let ySize = tileHeight * 0.75;
        image(this.image, xPos, yPos, xSize, ySize);
    }
}