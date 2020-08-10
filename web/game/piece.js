class Piece {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    getCurrentTile() {
        // Avoid tile from being 8
        x = x === width ? x-- : x; 
        y = y === height ? y-- : y;

        let xTile = Math.floor(this.x/(width/8));
        let yTile = Math.floor(this.y/(height/8));

        return [xTile, yTile];
    }
}