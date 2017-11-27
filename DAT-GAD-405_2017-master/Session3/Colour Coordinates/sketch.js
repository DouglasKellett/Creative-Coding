function setup() {
  createCanvas(600, 600)
}

function draw() {
  background(0);
  var X = width/2
  var Y = height/2

  fill(mouseX, mouseY, mouseX);
  rect(0, 0, X, Y);
  fill(mouseX * 3, mouseY + 18, mouseX/2);

  rect(X, Y, X, Y);
  fill(mouseY * 9, mouseX / 6, mouseY * 2);
  rect(0, Y, X, Y);
  fill(mouseX * 2, mouseX / 2, mouseY * 5);
  rect(X, 0, X, Y);
}
