var bubbles = [];
let url = "";

function setup() {
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  let key = "1zoFsoHaD_CAoh7KRm-q58ZKQOd957H54sz-LDzYRRE4";
  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Best Temperature?"],
        data[i]["Favorite Food?"],
        data[i]["Favorite Game or Movie?"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("blue");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(temp, food, game) {
    // only the order of these parameters matters!
    this.temp = temp;
    this.food = food;
    this.game = game;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("red");
    noFill();
    //if (this.animal == "rat") image(rat,this.pos.x, this.pos.y);
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.temp + "\n" + this.food + "\n" + this.game,
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel);
    if (this.pos.x>width) this.pos.x =0;

  }


}
