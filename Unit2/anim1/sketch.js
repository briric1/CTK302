let x = 0 ;
let font1,font2 ;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  font1 = loadFont ("assets/SyneTactile-Regular.ttf");
  font2 = loadFont ("assets/Yellowtail-Regular.ttf");
}

function draw() {
  background('black') ;
  fill('white')

  //rect(x, height/2, 10, 500);
  textFont(font1);
  textSize(32) ;
  translate(0,height/2);
  text("HELLO", x, 25);
  x -= 5 ;
  if (x < -100) {
    x = 500 ;
  }

}
