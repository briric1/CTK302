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
  noStroke() ;
  rectMode(CENTER);
  fill(225, 169,100);
  rect(200,333,68,100)
  fill(245, 189, 120)
  ellipse(200, 200, 235, 260);
  fill('brown');
  arc(200,146,215,155,PI,0);
  triangle(92,145,124,160,120,145);
  triangle(112,145,144,160,140,145);
  triangle(132,145,164,160,160,145);
  triangle(152,145,184,160,180,145);
  triangle(172,145,204,160,200,145);
  triangle(192,145,224,160,220,145);
  triangle(212,145,244,160,240,145);
  triangle(232,145,267,160,260,145);
  triangle(252,145,289,160,280,145);
  triangle(272,145,312,160,307,140);
  fill(50);
  quad(162, 259,258,259,250,288,152,288);
  fill(255);
  ellipse(245,200,75,60);
  ellipse(155,200,75,60);
  fill(0);
  ellipse(225,190,25,25);
  ellipse(135,190,25,25);
  push();
  translate(210,235);
  rotate(PI/4);
  rect(0,0,25,5);
  rotate(PI*3/4);
  rect(2,-10,25,5);
  pop();
  fill('red');
  arc(200,400,215,120,PI,0);
}
