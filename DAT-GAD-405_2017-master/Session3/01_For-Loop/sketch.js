//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_For-Loop

//Define the variable for the size
let size = 50;

function setup() {
  createCanvas(1200, 600);
  //noLoop();
  frameRate(24)

}

function draw() {
  background(255, 0, 0);
  push()
  fill(random(255));
  //rotate(random(360));
  for (let x = 0; x < 1000; x++) {
    pop
    rect(random(width), random(height), random(100), random(100));

}
}
