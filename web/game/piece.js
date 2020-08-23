class Piece {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
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
    
}