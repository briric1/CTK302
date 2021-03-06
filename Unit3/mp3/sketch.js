let books = []; // Array
let notifs = [];
let i = 0;
let brain;
let state = 0;
let maxBooks = 5;
let maxNotifs = 5;
let mp3_background;
let f1, f2;
let song1;
let sfx1;
let hw;
let redbox;
function preload() {
  song1 = loadSound("assets/bensound-thelounge.mp3");
  sfx1 = loadSound("assets/discsound.mp3");


}

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(1000, 600);

  imageMode(CENTER);
  textAlign(CENTER);

  f1 = loadFont("assets/BungeeInline-Regular.ttf");
  f2 = loadFont("assets/CarterOne-Regular.ttf");

  //player

  mp3_background = loadImage("assets/blurbg.jpeg");

  for (let i = 0; i < maxBooks; i++) {
    books.push(new Book());
  }

  for (let i = 0; i < maxNotifs; i++) {
    notifs.push(new Notif());
  }

  naviPos = createVector(width / 2, height / 2);

  // ALL load commands here
  brain = loadImage("assets/brainman.png");
  redbox = loadImage("assets/discnotif.png");
  hw = loadImage("assets/hwbook.png");

  song1.play();
}

function draw() {

  switch (state) {

    case 0:
      image(mp3_background, width / 2, height / 2, 1000, 600);
      fill('#001A4B');
      rect(150, 34, 700, 100, 20);
      fill('white');
      textFont(f1);
      textSize(60);
      text("Do Your Homework", width / 2, 105);
      fill('black');
      textFont(f2);
      textSize(32);
      text("Finish the homework before the notifications get you.", width / 2, 250);
      textSize(48);
      text("Click to begin!", width / 2, 530);
      break;

    case 1:
      image(mp3_background, width / 2, height / 2, 1000, 600);
      game();
      break;

    case 2: // win state
      image(mp3_background, width / 2, height / 2, 1000, 600);
      textSize(48);
      text("You win! The homework is done.", width / 2, height / 2);
      break;

    case 3: // lose state
      image(mp3_background, width / 2, height / 2, 1000, 600);
      textSize(48);
      text("Oh no! You got distracted.", width / 2, height / 2);
      break;

  }

}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2:
      resetGame();
      state = 0;
      break;

    case 3:
      resetGame();
      state = 0;
      break;
  }
}

function resetGame() {

  books = [];
  for (let i = 0; i < maxBooks; i++) {
    books.push(new Book());
  }

  notifs = [];
  for (let i = 0; i < maxNotifs; i++) {
    notifs.push(new Notif());
  }

  image(brain, naviPos.x, naviPos.y, 100, 50);
  naviPos = createVector(width / 2, height / 2);
}

function game() {

  if (!song1.isPlaying()) {

    song1.play();
  }

  //actions on the object
  for (let i = 0; i < books.length; i++) {
    books[i].display();
    books[i].move();
    if (books[i].pos.dist(naviPos) < 50) { //items hitbox
      books.splice(i, 1);
    }
  }

  if (books.length == 0) {
    state = 2;
  }

  for (let i = 0; i < notifs.length; i++) {
    notifs[i].display();
    notifs[i].move();

    if (notifs[i].pos.dist(naviPos) < 50) { //enemy hitbox
      sfx1.play();
      state = 3;
    }
  }

  //player
  image(brain, naviPos.x, naviPos.y, 100, 50);

  checkForKeys();
}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) naviPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) naviPos.x += 5;
  if (keyIsDown(UP_ARROW)) naviPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) naviPos.y += 5;

  if (naviPos.x > width) naviPos.x = 0;
  if (naviPos.x < 0) naviPos.x = width;
  if (naviPos.y > height) naviPos.y = 0;
  if (naviPos.y < 0) naviPos.y = height;
}


class Book {

  // constructor/attributes
  constructor() {
    this.pos = createVector(100, 100); //x+y coords
    this.vel = createVector(random(-5, 5), random(-5, 5));

  }

  // methods

  display() {
    image(hw, this.pos.x, this.pos.y, 50, 50);

  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}

class Notif {

  // constructor and attributes
  constructor() {
    this.pos = createVector(800, 500); //x+y coords
    this.vel = createVector(random(-5, 5), random(-5, 5));

  }

  // methods

  display() {
    image(redbox, this.pos.x, this.pos.y, 50, 50);

  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}

function touchStarted() {
  getAudioContext().resume();
}
