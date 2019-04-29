/* U4L8 - Using the Mouse.
Created by Charlie MacDonald on apr 25th, 2019
Last modified on apr 29th, 2019*/

let size = 20; //this variable will be changed by the mouse scroll wheel later on

function setup() {
  var firstCanvas = createCanvas(800, 400);  //create window for drawing
  firstCanvas.parent('call sketch.js');  //allow this code to be called by <div id="call sketch.js"> in index.html
}

function draw() {
    if (mouseIsPressed) {
      line(50,50,mouseX,mouseY);
      //when a mouse button is held down, draw a line from 50,50 to the mouse position.
    }
}

function mouseMoved() {
  //When the mouse is moved, run the code:
  background(255);
  ellipseMode(CENTER);
    ellipse(mouseX,mouseY, size,size); //create an ellipse at the mouse's location

  //Create rectangles that follow the mouse:
  rectMode(CENTER);
    rect(mouseX-size,mouseY-size, size,size);
    rect(mouseX+size,mouseY-size, size,size);
    rect(mouseX-size,mouseY+size, size,size);
    rect(mouseX+size,mouseY+size, size,size);
}

function mouseClicked() {
  //When the mouse is clicked:
  fill(random(255), random(255), random(255)); //change the color of the ellipse to something random
  //The code below will update the shape without the user having to move the mouse:
  background(255);
  ellipseMode(CENTER);
    ellipse(mouseX,mouseY, size,size); //create an ellipse at the mouse's location
  //Create rectangles that follow the mouse:
  rectMode(CENTER);
    rect(mouseX-size,mouseY-size, size,size);
    rect(mouseX+size,mouseY-size, size,size);
    rect(mouseX-size,mouseY+size, size,size);
    rect(mouseX+size,mouseY+size, size,size);
}

function mouseWheel(event) {
  //When the mouse wheel is scrolled, change the size:
  size = size+event.delta/40;
  //"event.delta" seems to be the automatically generated variable that measures the amount the mouse wheel has scrolled.

  //The code below will update the shape without the user having to move the mouse:
  background(255);
  ellipseMode(CENTER);
    ellipse(mouseX,mouseY, size,size); //create an ellipse at the mouse's location
  //Create rectangles that follow the mouse:
  rectMode(CENTER);
    rect(mouseX-size,mouseY-size, size,size);
    rect(mouseX+size,mouseY-size, size,size);
    rect(mouseX-size,mouseY+size, size,size);
    rect(mouseX+size,mouseY+size, size,size);
}

//The code below will allow the user to click and drag the shape, unlike in the example
function mouseDragged(event) {
  background(255);
  fill(random(255), random(255), random(255));

  ellipseMode(CENTER);
    ellipse(mouseX,mouseY, size,size); //create an ellipse at the mouse's location
  //Create rectangles that follow the mouse:
  rectMode(CENTER);
    rect(mouseX-size,mouseY-size, size,size);
    rect(mouseX+size,mouseY-size, size,size);
    rect(mouseX-size,mouseY+size, size,size);
    rect(mouseX+size,mouseY+size, size,size);
}
