state = 0


function setup() {
  createCanvas(500, 500);
  textSize(38);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {


  switch (state) {

    case 0:
      background("yellow");
      text("In the movie Die Hard...", width/2, height/2);

      break;

    case 1:
      background("green");
      text("nobody dies hard.", width/2, height/2);

      break;


  }

push();
fill('purple');
rectMode(CORNER);
rect(100,100,100,100);
pop();

}

function mouseReleased() {
  if ((mouseX>100) && (mouseX<200) && (mouseY>100) && (mouseY<200)) {
  state = (state + 1) % 2;
}
}
