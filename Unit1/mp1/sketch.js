function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {


  if (mouseIsPressed) {

    background(92, 176, 215);
    noStroke() ;
    rectMode(CENTER);
    fill(37,155,69);
    rect(200,333,68,100);
    triangle(40,140,90,240,90,160);
    triangle(360,140,310,240,310,160)
    fill(50,168,82);
    ellipse(width/2, height/2, 235, 260);

    fill(242, 221, 138);
    quad(142, 250,258,250,230,288,172,288);
    fill('#32a852');
    triangle(142, 250,258,250,200,260);
    fill(250);
    ellipse(245,200,75,60);
    ellipse(155,200,75,60);
    fill('red');
    ellipse(245,200,35,35);
    ellipse(155,200,35,35);
    push();
    translate(210,235);
    rotate(PI/4);
    fill(0);
    rect(0,0,25,5);
    rotate(PI*3/4);
    rect(2,-10,25,5);
    pop();
    fill(22, 99, 22);
    push();
    translate(160,150);
    rotate(PI/4);
    rect(0,0,60,10);
    pop();
    push();
    translate(240,150);
    rotate(PI/2+PI/4);
    rect(0,0,60,10);

    pop();
    fill(0);
    beginShape();
    vertex(158,270);
    vertex(170,277);
    vertex(180,270);
    vertex(190,277);
    vertex(200,270);
    vertex(210,277);
    vertex(220,270);
    vertex(230,277);
    vertex(243,270);
    vertex(240,272);
    vertex(230,279);
    vertex(220,272);
    vertex(210,279);
    vertex(200,272);
    vertex(190,279);
    vertex(180,272);
    vertex(170,279);
    vertex(160,272);

    endShape();

    fill('red');
    arc(200,400,215,120,PI,0);


  } else {
    background(52, 216, 235);
    noStroke() ;
    rectMode(CENTER);
    fill(225, 169,100);
    rect(200,333,68,100)
    fill(245, 189, 120)
    ellipse(width/2, height/2, 235, 260);
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

}
