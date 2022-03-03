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
      background("purple");
      text("nobody dies hard.", width/2, height/2);

      break;


  }


}

function mouseReleased() {
  state = (state +1) % 2;
}
