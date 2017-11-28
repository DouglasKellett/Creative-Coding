let x; let y;
let speedX; let speedY;
let r = 255; let g = 255; let b = 255;
function setup() {
  createCanvas(480, 640);
  x = width/2;
  y = height/2;
  speedX = random(-5, 5);
  speedY = random(-5, 5);
  textSize(16);
}
function draw() {
  background(100);
  x = x + speedX;
  y = y + speedY;
  if (x>width) {
     speedX = speedX *-1.;
     r = random(255)
     g = random(255)
     b = random(255)
  }
  if (y>height) {
    speedY = speedY *-1.;
    r = random(255)
    g = random(255)
    b = random(255)
  }
  if (x<0) {
    x = speedX = speedX *-1.;
    r = random(255)
    g = random(255)
    b = random(255)
  }
  if (y<0) {
     y = speedY = speedY *-1.;
     r = random(255)
     g = random(255)
     b = random(255)
  }
  fill(r, g, b, 120);
  ellipse(x, y, 50, 50);
  fill(255);
  text(x, width/2, height/2-20);
  text(y, width/2, height/2+20);

}
