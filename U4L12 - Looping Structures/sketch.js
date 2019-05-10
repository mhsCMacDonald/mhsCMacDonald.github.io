/* U4L12 - Looping Structures
Created by Charlie MacDonald on May 7th, 2019. Finished on May 9th, 2019.

This program will use "for" loops to make a row and column of rectangles move in a pattern.
I seeked John Guo's help to find a syntax error/confusion in my "for" loop code*/

//Global variables to make tweaking easier:
let x = 100;
let y = 100;

let xSpeed = 3;
let ySpeed = 6;

let size=50;

function setup() {
  //prepare the canvas and allow it to be called by <div id="call sketch.js"> in index.html
  var firstCanvas = createCanvas(800,600);
  firstCanvas.parent('call sketch.js');
  frameRate(60);
}

function draw() {
  //Configure ellipses:
  ellipseMode(CENTER);
  rectMode(CENTER);
  fill(178, 215, 255);

  x=x+xSpeed; //move shapes along x axis

  //Use a loop to draw multiple rectangles in a column moving left and right
  for (let x=50; x<width; x=x+size) {
    rect(x, y, size, size);
  }

  y=y+ySpeed; //move shapes along y axis

  //Use a loop to draw multiple rectangles in a row moving up and down
  for (let y=50; y<height; y=y+size) {
    rect(x, y, size, size);
  }

  /*Bounce code. The "size/1.5" bit makes the shapes bounce before they go off the canvas.
  The "||" is as an "or" statement.*/
  if (y>=(height-(size/1.5)) || y<=(size/1.5)) {
    ySpeed=ySpeed*(-1);
  }

  if (x>=(width-(size/1.5)) || x<=(size/1.5)) {
    xSpeed=xSpeed*-1;
  }
}
