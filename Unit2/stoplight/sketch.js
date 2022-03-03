let state = 0;
let timer = 0;
let x = 0;
let vel = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  background("white");
  fill("yellow");
  rect(width / 2, height / 2, 200, 600);

  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state = (state + 1) % 3;
  }



//car code
fill("blue");
rect(x, height - 100, 100, 75);
x = x + vel;
if (x > width) {
  x = 0;
}


switch (state) {

  case 0: //red light
    fill('red');
    ellipse(width / 2, height / 2 - 170, 150, 150);
    fill('grey');
    ellipse(width / 2, height / 2, 150, 150);

    ellipse(width / 2, height / 2 + 170, 150, 150);


    vel=0;
    break;

  case 1: //green light
    fill('grey');
    ellipse(width / 2, height / 2 - 170, 150, 150);
    ellipse(width / 2, height / 2, 150, 150);
    fill('green');
    ellipse(width / 2, height / 2 + 170, 150, 150);
    vel=3;
    break;

  case 2: //yellow light
    fill('grey');
    ellipse(width / 2, height / 2 - 170, 150, 150);
    fill('yellow');
    ellipse(width / 2, height / 2, 150, 150);
    fill('grey');
    ellipse(width / 2, height / 2 + 170, 150, 150);
    vel=25;
    break;
}
}
