//https://p5js.org
//https://p5js.org/learn/

//DAT405 / GAD405
//03_Colorlines (Exercise 01)
//Link all circles with individual lines
//Color of the line is the mix of the circle colors

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(700, 400);

  //Size of stroke
  strokeWeight(7);

  //No stroke for shapes
  noStroke();
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background(100);

  // BLUE TO RED
  stroke(127, 0, 127);
  line(50, 50, width-50, 50);

  // RED TO GREEN
  stroke(127, 127, 0);
  line(width-50, 50, 50, height-50);

  // GREEN TO YELLOW
  stroke(127, 255, 0);
  line(50, height-50, width-50, height-50);

  //YELLOW TO RED
  stroke(255, 127, 0)
  line(width-50, height-50, width-50, 50)

  //BLUE TO GREEN
  stroke(0, 127, 127)
  line(50, 50, 50, height-50)

  //BLUE TO YELLOW
  stroke(127, 127, 127)
  line(50, 50, width-50, height-50)

  //Top left corner shape position and color BLUE
  stroke(0)
  strokeWeight(0)
  fill(0, 0, 255);
  ellipse(50, 50, 100, 100);

  //Top right corner shape position and color RED
  fill(255, 0, 0);
  ellipse(width-50, 50, 100, 100);

  //Bottom left corner shape position and color GREEN
  fill(0, 255, 0);
  ellipse(50, height-50, 100, 100);

  //Bottom right corner shape position and color YELLOW
  fill(255, 255, 0);
  ellipse(width-50, height-50, 100, 100);




}
