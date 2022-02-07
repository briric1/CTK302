let font1, font2
// fonts came from https://fonts.google.com/
function setup() {
  createCanvas(500, 500);
  font1 = loadFont ("assets/SyneTactile-Regular.ttf");
  font2 = loadFont ("assets/Yellowtail-Regular.ttf");
}

function draw() {
  background(100) ;

  textSize(80) ;
  textFont(font1) ;
  text(Howdy!", width/2, 100) ;

  textFont(font2) ;
  test("Wassup?", width/2, 200) ;
}
