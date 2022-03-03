let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow") ;
      text("0", 100, 100);
      //timer code
      timer++;
      if (time > 3*60) {
        timer = 0;
        state = 1 ;
      }


      break;

    case 1:
      text("1", 100, 100);
      //timer code
      timer++;
      if (time > 5*60) {
        timer = 0;
        state = 2 ;
      }

      break;

    case 2:
      text("2", 100, 100);

      //timer code
      timer++;
      if (time > 7*60) {
        timer = 0;
        state = 0 ;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
