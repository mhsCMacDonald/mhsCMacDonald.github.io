/* Summative - Cut the Cord
Created by Charlie MacDonald on June 6th, 2019.

DESCRIPTION:
-Uses if/else statements to make levels - leanred from U4L11 decision structures
-Applies code/knowledge from "using the keyboard" and "using the mouse"
-Applies knowledge on using images and sounds from U4L10
-Makes extensive use of variables.

Global variables to make tweaking easier:*/
let ballx = 0;
let bally = 0;
let ballxSpeed = 0;
let ballySpeed = 0;
let ballcanmove=0; //ball speed is multiplied by this variable. If it equals 0, no movement.

let obstacleX = 0;
let obstacleY = 0;
let obstacleXSpeed = 0;
let obstacleYSpeed = 0;
let obstacleBounce = 1;

let level = 0;

//Variables for collision detection:
let hit=false;
let hitkill=false;
let hitarrow=false;

//Variables for images and sound:
let backgroundimg;
let arrowimg;
let winsound;
let diesound;

//Gravity direction variable:
let direction = 3; //1 is up, 2 is right, 3 is down (default), and 4 is left.

function preload() {
  //Prepare sound and images:
  backgroundimg = loadImage('Images/background1.jpg');
  arrow1img = loadImage('Images/arrow1.png');
  arrow2img = loadImage('Images/arrow2.png');
  arrow3img = loadImage('Images/arrow3.png');
  arrow4img = loadImage('Images/arrow4.png');
  winsound = loadSound('Sounds/winsound1.wav');
  diesound = loadSound('Sounds/diesound1.wav');
  //Use this link to test: http://localhost:8080/p5/Summative%20-%20Cut%20the%20Cord/index.html
}

function setup() {
  //prepare the canvas and allow it to be called by <div id="call sketch.js"> in index.html
  var firstCanvas = createCanvas(800,600);
  firstCanvas.parent('call sketch.js');
  frameRate(60);
  winsound.setVolume(0.3); //Set volume to 30%
  diesound.setVolume(0.3);
}

function draw() {
  ellipseMode(CENTER);

  /*Ball movement code. Placed at the start of the draw loop so it works for all levels.
  The ball is only moved if ballcanmove = 1 (true).*/
  ballx=ballx+ballxSpeed*ballcanmove;
  bally=bally+ballySpeed*ballcanmove;

  //If direction = 3 (down), make the ball fall
  //Since this is the default direction, I put it first
  if (direction == 3) {
  ballySpeed=ballySpeed+0.2*ballcanmove;
  }

  //If direction = 1 (up), make the ball fall up
  else if (direction == 1 && hitarrow == true) {
  ballySpeed=0;
  ballySpeed=ballySpeed-0.2*ballcanmove;
  }

  //If direction = 2 (right) , make the ball fall right
  else if (direction == 2 && hitarrow == true) {
  ballxSpeed=0;
  ballxSpeed=ballySpeed+0.2*ballcanmove;
  }

  //If direction = 3 (left), make the ball fall left
  else if (direction == 4 && hitarrow == true) {
    ballxSpeed=0;
    ballxSpeed=ballySpeed-0.2*ballcanmove;
  }

  /*If the player presses enter, start/reset to level 1.
  Placed code near the start so the player can restart at any time. */
  if (keyIsDown(ENTER)) {
    level = 1;
    ballx = 300;
    bally = 100;
    ballxSpeed = 0;
    ballySpeed = 0;
    ballcanmove= 0;
    print("Game started/restarted.");
  }

  /*Level 0: INSTRUCTIONS PAGE:
  Note: Not all features that add difficulty or variety will be explained yet.
  These features will be introduced later on with text to allow the player to discover what they do.*/
  else if (level == 0) {
    background(200); //draw a background over previous objects:
    image(backgroundimg,0,0);

    //Player instructions (text)
    textSize(24);
    fill(0);
    text("CUT THE CORD",width/2.7,height/12);
    textSize(18);
    text("Click the white ball to make it fall. Avoid obstacles and get the ball into the win zone!",width/24,height/12+50);
    textSize(12);
    text("Press Enter to start or restart on level 1.",width/2.8,height/12+100);
  }

  else if (level == 1) {
    //Set up level, draw text and background
    background(255);
    image(backgroundimg,0,0);
    textSize(20);
    fill(0);
    text("Level 1",width/24,height/12);

    fill(155,200,50);
    ellipse(300,500,150); //draw the goal zone
    fill(255);
    ellipse(ballx,bally,100); //draw the ball

	  hit = collidePointCircle(mouseX,mouseY,ballx,bally,100);
    print("Mouse touching ball? " + hit);

    //This code checks if the level has been won, and runs some code ONCE.
    if (bally > height-100) {
      winsound.play();
      print("Level " + level + " completed.");
      level = level + 1;
      ballx = 500;
      bally = 100;
      ballxSpeed = 0;
      ballySpeed = 0;
      ballcanmove= 0;

      //Set the variables that control the obstacle in lvl 2:
      obstacleX = 300;
      obstacleY = 300;
      obstacleXSpeed = 10;
      obstacleYSpeed = 0;
      print("Obstacle parameters set.");
    }
  }

  else if (level == 2) {
    //Set up level 2, draw text and background
    background(255);
    image(backgroundimg,0,0);
    obstacle();
    textSize(20);
    fill(0);
    text("Level 2",width/24,height/12);

    fill(155,200,50);
    ellipse(500,500,150); //draw the goal zone
    fill(255);
    ellipse(ballx,bally,100); //draw the ball

    //Check if the ball is touching a direction-change arrow:
    hitarrow = collideRectCircle(400,300,100,100,ballx,bally,100);
    print("Ball touching an arrow? " + hitarrow);

    //Check if mouse is touching the circle
	  hit = collidePointCircle(mouseX,mouseY,ballx,bally,100);
    print("Mouse touching ball? " + hit);

    //Check for collision with obstacles:
    hitkill = collideRectCircle(obstacleX,obstacleY,50,100,ballx,bally,50);
    print("Ball touching obstacle? " + hitkill);

    /*The following if statements check variables while the level is running.
    First, check if the level has been won or if the ball "died". Then, check for player input. */
    if (hitkill == true) {
      diesound.play();
      ballx = 500;
      bally = 100;
      ballxSpeed = 0;
      ballySpeed = 0;
      ballcanmove= 0;
    }

    else if (bally > height-100) {
      winsound.play();
      print("Level " + level + " completed.");
      level = level + 1;
      ballx = 500;
      bally = 100;
      ballxSpeed = 0;
      ballySpeed = 0;
      ballcanmove= 0;
    }

    //The next 4 "else if" statements check for key presses.
    else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      direction = 1;
      print("Direction set to up");
    }
    else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      direction = 2;
      print("Direction set to right");
    }
    else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      direction = 3;
      print("Direction set to down");
    }
    else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      direction = 4;
      print("Direction set to left");
    }

    if (direction == 1) {
      image(arrow1img,450,350);
    }
    if (direction == 2) {
      image(arrow2img,450,350);
    }
    if (direction == 3) {
      image(arrow3img,450,350);
    }
    if (direction == 4) {
      image(arrow4img,450,350);
    }
  }
}

function mousePressed() {
  //If the mouse is clicked and is touching the ball, unlock the ball's movement
  if (hit == true) {
    print("Object touched and mouse pressed.");
    ballcanmove = 1
  }
}

function obstacle() {
  fill(255,0,0);
  rect(obstacleX,obstacleY,100,50);
  obstacleX=obstacleX+obstacleXSpeed*obstacleBounce;
  obstacleY=obstacleY+obstacleYSpeed*obstacleBounce;

  if (obstacleX > width-100 || obstacleX < 0) {
    //If the obstacle is touching the canvas boundaries, reverse direction.
    obstacleBounce = obstacleBounce * -1;
  }
}

//OBSOLETE AND BROKEN CODE BELOW:

/*function mouseMoved() {
  //Draw a circle on the mouse (when moved) to detect collision with objects
  //background(200); - no need to redraw background, other functions take care of that
  ellipseMode(CENTER);
  ellipse(mouseX,mouseY, 50,50); //draw an ellipse where the mouse is for collision detection.
}*/

// is callback necessary?
