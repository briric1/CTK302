function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {
  background(135,206,235);
  noStroke();

  fill(0,80,200);
  rect(478, 290, 242, 110);

  fill(229,165,111);
  quad(0, 240, 0, 400, 490, 400, 478, 290);

  fill(255,230,0);
  ellipse(665, 55, 72, 72);

  fill(240);
  quad(175, 160, 199, 160, 204, 300, 180, 300);

  fill(13,153,150);
  quad(100, 305, 300, 325, 360, 380, 160, 360);

  fill(255,20, 182);
  arc(187, 160, 240, 220, PI, TWO_PI);

  fill('white') ;
  text(mouseX + ', ' + mouseY, 20, 20);
}

function mouseReleased() {
  print(mouseX + ', ' + mouseY) ;
}
