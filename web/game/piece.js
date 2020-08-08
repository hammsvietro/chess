class Piece {
    constructor(x, y, d, color) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.color = color;
    }

    draw() {
        fill(this.color == 'white' ? 255 : 91);
        circle(this.x + 25, this.y + 25, this.d);
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