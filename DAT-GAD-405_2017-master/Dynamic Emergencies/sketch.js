
function setup() {
  createCanvas(594, 841);
}
function draw() {
  background(0);
  frameRate(24);

//outline of the rects randomly change color every time the frame is updated
  stroke(random(255), random(255), random(255));
//rects all have black fill
  fill(0);
//loops that causes rects to appear in random places
//rects randomly appear top left of mouse
  for (let x = 300; x < 1000; x++) {
    //mouse position changes rect dimensions
    rect(mouseX - random(x), mouseY - random(x), mouseX - 300, mouseY - 420);
  }
//rects randomly appear top right of mouse
  stroke(random(255), random(255), random(255))
  for (let x = 300; x < 1000; x++) {
    rect(mouseX + random(x), mouseY - random(x), mouseX - 300, mouseY - 420);
  }
//rects randomly appear bottom left of mouse
  stroke(random(255), random(255), random(255))
  for (let x = 300; x < 1000; x++) {
    rect(mouseX - random(x), mouseY + random(x), mouseX - 300, mouseY - 420);
  }
//rects randomly appear bottom right of mouse
  stroke(random(255), random(255), random(255))
  for (let x = 300; x < 1000; x++) {
    rect(mouseX + random(x), mouseY + random(x), mouseX - 300, mouseY - 420);
  }


}
