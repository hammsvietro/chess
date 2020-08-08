const height = 400;
const width = 400; 

function setup() {
  createCanvas(width, height);
  let colored = false;

  for(let i = 0; i < height; i += height/8) {
    for(let j = 0; j < width; j += width/ 8) {

      fill(colored ? 10 : 255);

      
      
      rect(i, j, width/8, height/8);
      
      if (j < height/4) {
        new Piece( i, j, 20, 'white').draw();
      }
      if (j >= height*3/4) {
        new Piece(i,j, 20, 'black').draw()
      }
      
      

      colored = colored ? false : true;
    }
    colored = colored ? false : true;
  }
}

function draw() {
  


}
