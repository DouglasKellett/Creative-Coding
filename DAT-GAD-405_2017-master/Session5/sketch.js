let r = 522; let g = 255; let b = 255;
let speed = 3; let diameter = 50;
let x1; let y1;
function setup() {
  createCanvas(500, 500);
  x1 = width/2;
  y1 = height/2;
  background(200);
}
function draw() {
  x1 += random(-speed, speed);
  y1 += random(-speed, speed);
  x1 = constrain(x1, 0 , width);
  y1 = constrain(y1, 0, height);
  if (mouseIPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  fill (r, g, b, 120);
  elipse(x1, y1, diameter, diameter);
}
}
