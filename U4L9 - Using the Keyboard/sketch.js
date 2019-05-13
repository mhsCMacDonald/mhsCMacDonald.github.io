/* U4L9 - Using the Keyboard.
Created by Charlie MacDonald on apr 29th, 2019. Finished May 2nd, 2019.

This code is a simple game. It allows two players to move two shapes. The shapes
will bounce if they collide with the edges of the canvas or each other. A player
will win if they touch the opposite edge of the canvas, causing the program to stop
and display text. Press a mouse button to restart.*/

//Create variables indicating the position of player 1 and 2:
  let x=700;
  let y=300;

  //player 2:
  let x2=100;
  let y2=300;

//Create variables indicating the speed of player 1 and 2:
  let xSpeed=0;
  let ySpeed=0;

  //player 2
  let x2Speed=0;
  let y2Speed=0;

//Create a size variable to make it easier to tweak player size
  let size=100;

function setup() {
  var firstCanvas = createCanvas(800,500);  //create window for drawing
  firstCanvas.parent('call sketch.js');  //allow this code to be called by <div id="call sketch.js"> in index.html
  frameRate(60);
}

function draw() {
/*The following "if" statement restarts the game if the mouse is pressed.
I placed this "if" statement first since the program should check first if the players
want to restart the game.*/
  if (mouseIsPressed) {
    //Reset player positions
    x=700;
    y=300;
    //player 2:
    x2=100;
    y2=300;

    //Reset player speed:
    xSpeed=0;
    ySpeed=0;
    //player 2:
    x2Speed=0;
    y2Speed=0;
  }

//These two "else if" statements will check and indicate who won the game.
  else if (x<size/2) {
    textSize(24);
    fill(0);
    text("Blue wins!",width/2-width/8,height/2);
    text("Click the mouse to restart.",width/2-width/8,height/2+height/12);
  }
  else if (x2>width-size/2) {
    textSize(24);
    fill(0);
    text("Green wins!",width/2-width/8,height/2);
    text("Click the mouse to restart.",width/2-width/8,height/2+height/12);
  }

//If nobody has won, and the mouse hasn't been pressed to restart the game, play the game normally:
  else if (x>size/2 || x2<width-size/2) {
  //draw a background over the previous old rectangles
    background(200);

  //Player instruction text:
    textSize(22);
    fill(0);
    text("Use WASD/arrow keys to reach to the other side!",width/5,height/12);
    text("Don't let your opponent reach the other side! Block them!",width/7,height/7);

  //create a varibale that tests for collision and is true when the two rectangles collide:
    hit = collideRectRect(x,y,size,size, x2,y2,size+3,size+3);
    //make rectangles bounce if they hit each other:
    print(hit); //print a message to console if collision is detected
    if (hit===true) {
      xSpeed=xSpeed*-1;
      ySpeed=ySpeed*-1;
      //player 2:
      x2Speed=x2Speed*-1;
      y2Speed=y2Speed*-1;
    }

  //RECTANGLE DRAWING:
    rectMode(CENTER);
    fill(178, 215, 255);
    rect(x,y,size,size);

    //Player 2:
    fill(169, 225, 157);
    rect(x2,y2,size,size);

  //BOUNCE CODE:
    //The "||" acts as an "or" statement.
    if (y>=(height-(size/2)) || y<=(size/2)) {ySpeed=ySpeed*(-1);}
    if (x>=(width-(size/2)) || x<=(size/2)) {xSpeed=xSpeed*-1;}

    //Player 2. The "||" acts as an "or" statement.
    if (y2>=(height-(size/2)) || y2<=(size/2)) {y2Speed=y2Speed*(-1);}
    if (x2>=(width-(size/2)) || x2<=(size/2)) {x2Speed=x2Speed*-1;}

  //ANTI-ESCAPE CODE:
    //Prevent players from "escaping" by forcing shapes back onto the canvas
    if (x<0+size/2) {x=x+2;}
    if (x>width-size/2) {x=x-2;}
    if (y<0+size/2) {y=y+2;}
    if (y>height-size/2) {y=y-2;}

    //Player 2:
    if (x2<0+size/2) {x2=x2+2;}
    if (x2>width-size/2) {x2=x2-2;}
    if (y2<0+size/2) {y2=y2+2;}
    if (y2>height-size/2) {y2=y2-2;}

  //RECTANGLE MOVEMENT
    /*This code moves the rectangles. It has been placed after the collision,
    bounce, and anti-escape code to prevent players from moving where they shouldn't*/
    x=x+xSpeed;
    y=y+ySpeed;
    //Player 2:
    x2=x2+x2Speed;
    y2=y2+y2Speed;

  //KEYBOARD INTERACTIVITY:
    //The next 4 "if" statements allow player 1 to move with arrow keys. "&&" is an "and" logic operator
    if (keyIsDown(LEFT_ARROW) && x>0+size/2) {xSpeed=xSpeed-1.25;}
    if (keyIsDown(RIGHT_ARROW) && x<width-size/2) {xSpeed=xSpeed+1.25;}
    if (keyIsDown(DOWN_ARROW) && y<height-size/2) {ySpeed=ySpeed+1.25;}
    if (keyIsDown(UP_ARROW)  && y>0+size/2) {ySpeed=ySpeed-1.25;}

    //Player 2. Note that keycodes are used to represent the WASD keys.
    if (keyIsDown(65) && x2>0+size/2) {x2Speed=x2Speed-1.25;}
    if (keyIsDown(68) && x2<width-size/2) {x2Speed=x2Speed+1.25;}
    if (keyIsDown(83) && y2<height-size/2) {y2Speed=y2Speed+1.25;}
    if (keyIsDown(87)  && y>0+size/2) {y2Speed=y2Speed-1.25;}

  //FRICTION:
    /*The next 4 "if" statements cause friction by slowly reducing speed each
    time the program loops. It does nothing if the objects are stationary.*/
    if (xSpeed>0) {xSpeed=xSpeed-xSpeed*0.1;}
    if (xSpeed<0) {xSpeed=xSpeed-xSpeed*0.1;}
    if (ySpeed<0) {ySpeed=ySpeed-ySpeed*0.1;}
    if (ySpeed>0) {ySpeed=ySpeed-ySpeed*0.1;}

    //Player 2:
    if (x2Speed>0) {x2Speed=x2Speed-x2Speed*0.1;}
    if (x2Speed<0) {x2Speed=x2Speed-x2Speed*0.1;}
    if (y2Speed<0) {y2Speed=y2Speed-y2Speed*0.1;}
    if (y2Speed>0) {y2Speed=y2Speed-y2Speed*0.1;}
  }
}
