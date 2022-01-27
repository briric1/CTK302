let font1, font2

function setup() {
  createCanvas(500, 500);
  font1 = loadFont ("assets/")
  font2 = loadFont ("assets/")
}

function draw() {
  background(100) ;

  testSize(80) ;
  textFont(font1) ;
  text(Howdy!", width/2, 100) ;

  textFont(font2) ;
  test("Wassup?", width/2, 200) ;
}
