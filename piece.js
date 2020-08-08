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
}