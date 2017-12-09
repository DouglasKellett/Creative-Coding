
function setup() {
  createCanvas(594, 841);
}
function draw() {
  background(0);
  frameRate(24);


  stroke(random(255), random(255), random(255));
  fill(0);
  for (let x = 300; x < 1000; x++) {
    rect(mouseX - random(x), mouseY - random(x), mouseX - 300, mouseY - 420);
  }
  stroke(random(255), random(255), random(255))
  for (let x = 300; x < 1000; x++) {
    rect(mouseX + random(x), mouseY - random(x), mouseX - 300, mouseY - 420);
  }
  stroke(random(255), random(255), random(255))
  for (let x = 300; x < 1000; x++) {
    rect(mouseX - random(x), mouseY + random(x), mouseX - 300, mouseY - 420);
  }
  stroke(random(255), random(255), random(255))
  for (let x = 300; x < 1000; x++) {
    rect(mouseX + random(x), mouseY + random(x), mouseX - 300, mouseY - 420);
  }


}
