 //U4L7 by Charlie MacDonald. Started on apr 10th, 2019.


//Global variables:
let x=50;
let y=100;

let x2=400;
let y2=400;

let xSpeed=20;
let ySpeed=-5;

let size=100;

function setup() {
  createCanvas(1000,800);
  frameRate(60);

}

function draw() {
//draw a background over the previous old rectangles
  background(200);

  //check for a collision
    hit = collideRectRect(x,y,size,size, x2,y2,size+3,size+3);
    print(hit); //print a message if collision is detected

    if (hit===true) {
      xSpeed=xSpeed*-1;
      ySpeed=ySpeed*-1;
    }

//draw the rectangles
rectMode(CENTER);
  fill(178, 215, 255);
  rect(x,y,size,size);

  fill(27, 226, 21); //slime green - this rectangle's collision will be "sticky"
  rect(x2,y2,size,size);

//move the first rectangle:
  x=x+xSpeed;
  y=y+ySpeed;

//Bounce code. the "||" acts as an "or" statement.
  if (y>=(height-(size/2)) || y<=(size/2)) {
    ySpeed=ySpeed*(-1);
  }

  if (x>=(width-(size/2)) || x<=(size/2)) {
    xSpeed=xSpeed*-1;
  }

//The next 4 "if" statements allow the square to move. "&&" is an "and" logic operator
  if (keyIsDown(LEFT_ARROW) && x>0+53) {
    xSpeed=xSpeed-2;
  }

  if (keyIsDown(RIGHT_ARROW) && x<width-53) {
    xSpeed=xSpeed+2;
  }

  if (keyIsDown(DOWN_ARROW) && y<height-53) {
    ySpeed=ySpeed+2;
  }

  if (keyIsDown(UP_ARROW)  && y>0+53) {
    ySpeed=ySpeed-2;
  }

//The next 3 "if" statements cause friction
  if (xSpeed>0) {
    xSpeed=xSpeed-xSpeed*0.1;
  }

  if (xSpeed<0) {
    xSpeed=xSpeed-xSpeed*0.1;
  }

  if (ySpeed<0) {
    ySpeed=ySpeed-ySpeed*0.1;
  }

//gravity:
  if (y<height-53) {
    ySpeed=ySpeed+0.3
  }
}
