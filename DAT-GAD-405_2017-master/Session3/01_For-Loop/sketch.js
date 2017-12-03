let r = 255; let g = 255; let b = 255;

function setup() {
  createCanvas(594, 841);
  //noLoop();
  frameRate(24);

}

function draw() {
  background(0);

  r = random(255);
  g = random(255);
  b = random(255);

  let size = random(30);

  stroke(255, 255, 0);
  for (let x = 300; x < 900; x++) {
    line(random(x), random(x), mouseX, mouseY);
  }

  stroke(255);
  for (let y = 300; y < 900; y++) {
    line(random(y), random(y), mouseX, mouseY);
  }
  stroke(0)
  fill(0);
  ellipse(mouseX, mouseY, size, size);


}
