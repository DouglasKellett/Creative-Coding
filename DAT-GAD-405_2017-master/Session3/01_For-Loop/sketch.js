let r = 255; let g = 255; let b = 255;
let size = 50;

function setup() {
  createCanvas(800, 600);
  //noLoop();
  frameRate(24)

}

function draw() {
  background(255, 0, 0);

  r = random(255);
  g = random(255);
  b = random(255);

  fill(r, g, b);
  for (let x = 0; x < 800; x++) {
    push()
    rect(random(x), random(x), random(size), random(size));
    pop()
  }

}
