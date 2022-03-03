let bg;
let goodg;
let badg;
let guit;
let blood;
let state = 0;
let font1;
let font2;
var mic;
var vol;
let timer = 0;
function preload() {
  bg = loadImage('assets/8bitland.png');
  goodg = loadImage('assets/good guy.png');
  badg = loadImage('assets/bad guy.png');
  guit = loadImage('assets/8bguitar.png');
  blood = loadImage('assets/blood8b.png');
  font1 = loadFont('assets/SyneTactile-Regular.ttf');
  font2 = loadFont('assets/Yellowtail-Regular.ttf');
}

function setup() {
  createCanvas(760, 430);

  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2);

  textFont(font2);
  textSize(40);
  textAlign(CENTER);

switch (state) {
  case 0:
  image(bg,0,0);
  image(goodg,600,250,90,110);
  text("Enemies approach you...",width/2,205);
  image(badg,200,246,90,110);
  image(badg,300,246,90,110);
  image(badg,400,246,90,110);
  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state = 1;
  }
  if (vol>0.3) {
    state = 2;
  }

  break;
  case 1:
  image(bg,0,0);
  image(goodg,600,250,90,110);
  push();
  translate(0,0);
  rotate(PI/16);
  text("You killed them with sick jams!",width/2,60);
  pop();
  push();
  translate(100,446);
  rotate(PI/-2);
  image(blood,0,0,90,110);
  image(blood,0,100,90,110);
  image(blood,0,200,90,110);
  image(badg,0,0,90,110);
  image(badg,0,120,90,110);
  image(badg,0,240,90,110);
  pop();
  translate(680, 258);
  rotate(PI / 3.0);
  image(guit,0,0,90,110);
  break;
  case 2:
  image(bg,0,0);
  image(goodg,600,250,90,110);
  text("You scared them away!",210,300);
  break;
}

}
function mouseReleased() {
  state = 0;
}
