var deg = 0;
let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
//let toggle = true;

function setup() {
  createCanvas(1200, 600);
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);
  angleMode(DEGREES);

  laptop = loadImage("assets/laptopimg.jpg");
  clouds = loadImage("assets/clouds-clipart-transp.png");
  sun = loadImage("assets/no-smile-sun.png");
  rain = loadImage("assets/raindrops.png");
  snow = loadImage("assets/snowflakes.png");
  f1 = loadFont("assets/DiplomataSC-Regular.ttf");
  f2 = loadFont("assets/SpecialElite-Regular.ttf");


  // HERE is the call to get the weather. We build the string first.
  let normalString =
    "https://api.openweathermap.org/data/2.5/weather?q=Normal,IL,US&units=imperial&";
  let tucsonString = "https://api.openweathermap.org/data/2.5/weather?q=Tucson,AZ,US&units=imperial&";
  let manilaString = "https://api.openweathermap.org/data/2.5/weather?q=Manila,PH,US&units=imperial&";
  let valdezString = "https://api.openweathermap.org/data/2.5/weather?q=Valdez,AK,US&units=imperial&";

  //You can also use "zipcode"

  // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx

  let myIDString = "appid=2ab3fd961cc8c4aacb1786ddb79e8da5";

  let myTotalString = normalString + myIDString;

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  description = weather.weather[0].main;

}

function draw() {
  switch (state) {

    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:

      //myTotalString = normalString + myIDString;
      all();
      textFont(f1);
      textSize(32);
      fill(0);
      //text("Normal, IL", 992,41);
      labels();

      // textFont(f1);
      // textSize(32);
      // fill(0);
      // text("Manila, PH", 992,41);
      // textFont(f1);
      // textSize(32);
      // fill(0);
      // text("Valdez, AK", 994,41);
      break;

    // case 2:
    //     if (weather) {
    //       state = 3;
    //     }
    //     break;
    //
    //
    // case 3:
    //
    //   myTotalString = tucsonString + myIDString;
    //   all();
    //   textFont(f1);
    //   textSize(32);
    //   fill(0);
    //   text("Tucson, AZ", 1000,41);
    //   break;
  }
}

function blades() {

  fill(80);
  translate(200, 201);
  rotate(deg);
  translate(0, -45);
  ellipse(0, 0, 55, 104);
  translate(40, 70);
  rotate(120);
  ellipse(0, 0, 55, 104);
  translate(40, 70);
  rotate(120);
  ellipse(0, 0, 55, 104);
  deg = deg + windspeed / 2;
}

function wire() {
  stroke(0);
  strokeWeight(10);
  noFill();
  curve(1000, -5, 700, 0, 1200, 250, 2500, -750);
  curve(-100, 100, 0, 100, 400, 0, 400, -1000)
}

function light() {
  fill(100);
  rect(0, 0, 12, 12);
  if (temperature <= 0) {
    fill('purple');
  } else if (temperature > 0 && temperature <= 20) {
    fill('blue');
  } else if (temperature > 20 && temperature <= 40) {
    fill('green');
  } else if (temperature > 40 && temperature <= 60) {
    fill('yellow');
  } else if (temperature > 60 && temperature <= 80) {
    fill('orange');
  } else if (temperature > 80 && temperature <= 100) {
    fill('red');
  } else {
    fill('black');
  }
  ellipse(0, 12, 20, 25);
}

function screen() {
  fill(0);
  rect(width / 2, height / 2 - 60, 370, 242);
  if (description === "Snow") {
    fill('6b7d8f');
    rect(width / 2, height / 2 - 60, 370, 242);
    push();
    translate(width / 2, height / 2 - 40)
    rotate(245);
    image(snow, 0, 0, 175, 228);
    pop();
    image(clouds, width / 2 - 5, height / 2 - 60, 270, 270);
  }
  if (description === "Rain" || description === "Drizzle" || description === "Thunderstorm" || description === "Mist") {
    fill('6bjd8f');
    rect(width / 2, height / 2 - 60, 370, 242);
    image(rain, width / 2, height / 2 - 20, 240, 180);
    image(clouds, width / 2 - 5, height / 2 - 60, 270, 270);
  }
  if (description === "Clouds" || description === "Fog" || description === "Dust" || description === "Haze" || description === "Smoke" || description === "Sand" || description === "Ash" || description === "Squall" || description === "Tornado") {
    fill('#3e82f0');
    rect(width / 2, height / 2 - 60, 370, 242);
    image(clouds, width / 2, height / 2 - 10, 350, 350);
  }
  if (description === "Clear") {
    fill('#3e82f0');
    rect(width / 2, height / 2 - 60, 370, 242);
    image(sun, width / 2, height / 2 - 60, 250, 250);
  }

}

function all() {
  background('#D2B48C');
  fill('#654321');
  noStroke();
  rect(width / 2, 450, 1200, 300);
  push();
  wire();
  pop();
  fill(150);
  ellipse(200, 400, 200, 100);
  fill(130);
  rect(200, 295, 80, 200);
  fill(150);
  ellipse(200, 200, 220, 220);
  push();
  blades();
  pop();

  push();
  translate(50, 110);
  light();
  pop();
  push();
  translate(300, 90);
  rotate(155);
  light();
  pop();
  push();
  translate(404, 15);
  rotate(300);
  light();
  pop();
  push();
  translate(721, 15);
  rotate(250);
  light();
  pop();
  push();
  translate(825, 150);
  rotate(230);
  light();
  pop();
  push();
  translate(970, 271);
  rotate(18);
  light();
  pop();
  push();
  translate(1150, 276);
  rotate(338);
  light();
  pop();

  fill(0);
  ellipse(200, 200, 20, 20);
  image(laptop, width / 2, height / 2 - 15, 600, 685);
  screen();
}
function labels() {
  textFont(f2);
  textSize(18);
  fill(255);
  text("Fan: Blows at a speed \ncorrelating with the wind speed.",200,480);
  text("Laptop: Displays the weather condition.", width/2, 525);
  text("Lights: Change color \ndepending on the temperature.",1010, 335);
  //text("Press ENTER \nto toggle HUD.",1122,560);
}

// function mouseReleased() {
//   state = (state + 1) % 3;
//   weather = null;
//   loadJSON(myTotalString, gotData);
// }
//function keyPressed() {

  //if (keyIsDown(UP_ARROW)) labels.hide();//(keyCode === LEFT_ARROW && toggle = true) {

    // toggle = false;
  //}
  // if (keyCode === 13 && toggle = false) {
  //   toggle = true;
  // }
  // else {
  //   toggle = true;
  // }
//}
