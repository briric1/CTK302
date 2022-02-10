// Reed Cavi's Rain Man
let x = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  push();
  translate(x, 0);
  avatar();
  x += 5;
  if (x > 600) {
    x = -400;
  }
  pop();
}

function avatar() {
  // rain man body head when not pressed
  fill('black')
  ellipse(410, 170, 80, 80);

  fill('white');
  arc(410, 180, 40, 40, 0, PI + QUARTER_PI, CHORD);

  // rain man body
  fill('black');
  rect(390, 200, 40, 140);
  rect(395, 230, 10, 140);
  rect(413, 230, 10, 140);

  // rain man arms
  fill('black');
  line(500, 200, 400, 225);
  fill('black');
  line(300, 200, 400, 225);

  fill('white')
  ellipse(395, 150, 10, 10);

  fill('white')
  ellipse(425, 150, 10, 10);
}
