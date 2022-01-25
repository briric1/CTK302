let cookies ;
let music ;
let games ;


function setup() {
  createCanvas(500, 500);

 cookies = loadImage("assets/2ChocolateChipCookies.jpg") ;
 music = loadImage("assets/keyboard.jpg") ;
 games = loadImage("assets/oculus.jpg") ;

}

function draw() {
  image(cookies, width/2, 100, 125, 100) ;
  image(music, width/2, 200, 220, 100) ;
  image(games, width/2, 300, 150, 100) ;
}
