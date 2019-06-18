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

let obstacleX2 = 0;
let obstacleY2 = 0;
let obstacleXSpeed2 = 0;
let obstacleYSpeed2 = 0;
let obstacleBounce2 = 1;

let level = 0;

//Variables for collision detection:
let hit=false;
let hitwin=false;

let hitkill=false;
let hitkill2=false;

let hitarrow=false;
let hitarrow2=false;

//Variables to hold images and sound:
let backgroundimg;
let arrowimg;
let winsound;
let diesound;
let winscreen;

//Ball gravity direction:
let direction = 3; //1 is up, 2 is right, 3 is down (default), and 4 is left.

function preload() {
  //Prepare sound and images:
  backgroundimg = loadImage('Images/background1.jpg');
  winscreen = loadImage('Images/winscreen.jpg');
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

//MOVEMENT CODE.
  //The ball is only moved if ballcanmove = 1 (true).*/
  ballx=ballx+ballxSpeed*ballcanmove;
  bally=bally+ballySpeed*ballcanmove;

  //If direction = 3 (down), make the ball fall
  //Since this is the default direction, I put it first
  if (direction == 3) {
    if (hitarrow == true || hitarrow2 == true) {
      ballxSpeed=0;
      ballySpeed=ballySpeed+0.2*ballcanmove;
      print("ball will fall down");
    }
  }

  //If direction = 1 (up), make the ball fall up
  else if (direction == 1) {
    if (hitarrow == true || hitarrow2 == true) {
      ballxSpeed=0;
      ballySpeed=ballySpeed-0.2*ballcanmove;
      print("ball will fall up");
    }
  }

  //If direction = 2 (right) , make the ball fall right
  else if (direction == 2) {
    if (hitarrow == true || hitarrow2 == true) {
      ballySpeed=0;
      ballxSpeed=ballxSpeed+0.2*ballcanmove;
      print("ball will fall right");
    }
  }

  //If direction = 4 (left), make the ball fall left
  else if (direction == 4) {
    if (hitarrow == true || hitarrow2 == true) {
    ballySpeed=0;
    ballxSpeed=ballxSpeed-0.2*ballcanmove;
    print("ball will fall left");
    }
  }

//LEVEL CODE:
  /*If the player presses enter, start/reset to level 1.
  Placed code near the start so the player can restart at any time. */
  if (keyIsDown(ENTER)) {
    level = 1;
    ballx = 300;
    bally = 100;
    ballxSpeed = 0;
    ballySpeed = 0;
    ballcanmove= 0;
    direction = 3;
    hit=false;
    hitkill=false;
    hitarrow=false;
    print("Game started/restarted.");
  }

  //Level 0: INSTRUCTIONS PAGE:
  else if (level == 0) {
    background(200); //draw a background over previous objects:
    image(backgroundimg,0,0);

    //Player instructions (text)
    textSize(24);
    fill(0);
    text("THE BALL",width/2.4,height/12);
    textSize(18);
    text("Click the white ball to UNLOCK movement. Avoid red obstacles and get the ball to the green!",width/20,height/12+50);
    textSize(12);
    text("Press Enter to start or restart on level 1.",width/2.8,height/12+100);
  }

//If the level number is 1, run all the code for lvl 1
  else if (level == 1) {
    //SET UP LEVEL:
      background(255);
      image(backgroundimg,0,0);
      textSize(20);
      fill(0);
      text("Level 1",width/24,height/12);

      //DRAW ARROWS
        if (direction == 1) {
        image(arrow1img,250,50);
        }
        else if (direction == 2) {
        image(arrow2img,250,50);
        }
        else if (direction == 3) {
        image(arrow3img,250,50);
        }
        else if (direction == 4) {
        image(arrow4img,250,50);
        }

    //DRAW BALL AND GOAL ZONE
      fill(155,200,50);
      ellipse(300,500,50); //draw the goal zone
      fill(255);
      ellipse(ballx,bally,100); //draw the ball

    //COLLISION CHECKS:
      //Check if the mouse is touching the ball
  	  hit = collidePointCircle(mouseX,mouseY,ballx,bally,100);

      //Check if the ball has touched the win (green) circle
      hitwin = collideCircleCircle(300,500,50,ballx,bally,100);

      //Check if the ball is touching a direction-change arrow:
      hitarrow = collideRectCircle(250,50,100,100,ballx,bally,100);

    /*First, check if the player has lost, then check if the player has won or has pressed a key.*/
    if (ballx < 0 || ballx > width || bally < 0 || bally > height) {
        diesound.play();
        ballx = 300;
        bally = 100;
        ballxSpeed = 0;
        ballySpeed = 0;
        ballcanmove= 0;
    }

    //If the level has been won, set up the next level:
    else if (hitwin == true) {
      winsound.play();
      print("Level " + level + " completed.");
      level = level + 1;
      ballx = 500;
      bally = 100;
      ballxSpeed = 0;
      ballySpeed = 0;
      ballcanmove = 0;
      direction = 2;

      //Prepare obstacle in lvl 2:
      obstacleX = 300;
      obstacleY = 300;
      obstacleXSpeed = 10;
      obstacleYSpeed = 0;
      print("Obstacle parameters set.");
    }

    //Check for key presses.
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
  }

//If the level number is 2, run all the code for lvl 2
  else if (level == 2) {
    //SET UP LEVEL
      background(255);
      image(backgroundimg,0,0);

      //Run the obstacle:
        fill(255,0,0);
        rect(obstacleX,obstacleY,100,50);
        obstacleX=obstacleX+obstacleXSpeed*obstacleBounce;
        obstacleY=obstacleY+obstacleYSpeed*obstacleBounce;

        if (obstacleX > width-100 || obstacleX < 0) {
          //If the obstacle is touching the canvas boundaries, reverse direction.
          obstacleBounce = obstacleBounce * -1;
        }

      textSize(20);
      fill(0);
      text("Level 2",width/24,height/12);
      text("Change direction by using arrow keys.",width/24,height/12+50);

    //DRAW ARROWS
      if (direction == 1) {
      image(arrow1img,450,50);
      }
      else if (direction == 2) {
      image(arrow2img,450,50);
      }
      else if (direction == 3) {
      image(arrow3img,450,50);
      }
      else if (direction == 4) {
      image(arrow4img,450,50);
      }

    //DRAW BALL AND GOAL ZONE
      fill(155,200,50);
      ellipse(500,500,50); //draw the goal zone
      fill(255);
      ellipse(ballx,bally,100); //draw the ball

    //COLLISION CHECKS
      hitwin = collideCircleCircle(500,500,50,ballx,bally,100);

      //Check if the ball is touching a direction-change arrow:
      hitarrow = collideRectCircle(450,50,100,100,ballx,bally,100);

      //Check if mouse is touching the circle
  	  hit = collidePointCircle(mouseX,mouseY,ballx,bally,100);

      //Check for collision with obstacles:
      hitkill = collideRectCircle(obstacleX,obstacleY,100,50,ballx,bally,50);

    /*First, check if the player has lost, then check if the player has won or has pressed a key.*/
    if (hitkill == true || ballx < 0 || ballx > width || bally < 0 || bally > height) {
      diesound.play();
      ballx = 500;
      bally = 100;
      ballxSpeed = 0;
      ballySpeed = 0;
      ballcanmove= 0;
    }

    else if (hitwin) {
      winsound.play();
      print("Level " + level + " completed.");
      level = level + 1;
      ballx = 500;
      bally = 100;
      ballxSpeed = 0;
      ballySpeed = 0;
      ballcanmove= 0;
    }

    //Check for key presses.
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
  }

//If the level number is 3, run all the code for lvl 3
  else if (level == 3) {
    //SET UP LEVEL
      background(255);
      image(backgroundimg,0,0);

      //MOVE THE the obstacle:
        fill(255,0,0);
        rect(obstacleX,obstacleY,100,50);
        obstacleX=obstacleX+obstacleXSpeed*obstacleBounce;
        obstacleY=obstacleY+obstacleYSpeed*obstacleBounce;

        if (obstacleX > width-100 || obstacleX < 0) {
          //If the obstacle is touching the canvas boundaries, reverse direction.
          obstacleBounce = obstacleBounce * -1;
        }

      //Player instruction text:
      textSize(20);
      fill(0);
      text("Level 3",width/24,height/12);
      text("All arrows point the same way.",width/24,height/12+50);
      text("Changing directions cancels momentum.",width/24,height/12+100);
      text("Change directions at the right moment - dont miss!.",width/24,height/12+150);

    //DRAW ARROWS
      if (direction == 1) {
        image(arrow1img,450,50);
        image(arrow1img,450,450);
      }
      else if (direction == 2) {
        image(arrow2img,450,50);
        image(arrow2img,450,450);
      }
      else if (direction == 3) {
        image(arrow3img,450,50);
        image(arrow3img,450,450);
      }
      else if (direction == 4) {
        image(arrow4img,450,50);
        image(arrow4img,450,450);
      }

    //DRAW BALL AND GOAL ZONE
      fill(155,200,50);
      ellipse(100,500,50); //draw the goal zone
      fill(255);
      ellipse(ballx,bally,100); //draw the ball

      //COLLISION CHECKS
      hitwin = collideCircleCircle(100,500,50,ballx,bally,100);

      //Check if the ball is touching a direction-change arrow:
      hitarrow = collideRectCircle(450,50,100,100,ballx,bally,100);
      hitarrow2 = collideRectCircle(450,450,100,100,ballx,bally,100);
      print("Touching Arrow 2? " + hitarrow2);

      //Check if mouse is touching the circle
      hit = collidePointCircle(mouseX,mouseY,ballx,bally,100);

      //Check for collision with obstacles:
      hitkill = collideRectCircle(obstacleX,obstacleY,100,50,ballx,bally,50);

    /*First, check if the player has lost, then check if the player has won or has pressed a key.*/
    if (hitkill == true || ballx < 0 || ballx > width || bally < 0 || bally > height) {
      diesound.play();
      ballx = 500;
      bally = 100;
      ballxSpeed = 0;
      ballySpeed = 0;
      ballcanmove= 0;
    }

    else if (hitwin) {
      winsound.play();
      print("Level " + level + " completed.");
      level = level + 1;
      ballx = 500;
      bally = 100;
      ballxSpeed = 0;
      ballySpeed = 0;
      ballcanmove= 0;

      obstacleX = 100;
      obstacleY = 200;
      obstacleXSpeed = 5;
      obstacleYSpeed = 0;

      obstacleX2 = 300;
      obstacleY2 = 200;
      obstacleXSpeed2 = 0;
      obstacleYSpeed2 = 10;
      print("Obstacle parameters set.");
    }

    //Check for key presses.
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
  }

//If the level number is 4, run the code for lvl 4:
  else if (level == 4) {
    //SET UP LEVEL
      background(255);
      image(backgroundimg,0,0);

      //MOVE THE the obstacles:
        fill(255,0,0);
        rect(obstacleX,obstacleY,100,50);
        obstacleX=obstacleX+obstacleXSpeed*obstacleBounce;
        obstacleY=obstacleY+obstacleYSpeed*obstacleBounce;

        if (obstacleX > width-100 || obstacleX < 0) {
          //If the obstacle is touching the canvas boundaries, reverse direction.
          obstacleBounce = obstacleBounce * -1;
        }

        //obstacle #2:
        rect(obstacleX2,obstacleY2,50,100);
        obstacleX2=obstacleX2+obstacleXSpeed2*obstacleBounce2;
        obstacleY2=obstacleY2+obstacleYSpeed2*obstacleBounce2;

        if (obstacleY2 > height-100 || obstacleY2 < 0) {
          //If the obstacle is touching the canvas boundaries, reverse direction.
          obstacleBounce2 = obstacleBounce2 * -1;
        }

      textSize(20);
      fill(0);
      text("Level 4",width/24,height/12);
      text("Timing is key.",width/24,height/12+50);

    //DRAW ARROWS
      if (direction == 1) {
        image(arrow1img,450,50);
        image(arrow1img,450,450);
      }
      else if (direction == 2) {
        image(arrow2img,450,50);
        image(arrow2img,450,450);
      }
      else if (direction == 3) {
        image(arrow3img,450,50);
        image(arrow3img,450,450);
      }
      else if (direction == 4) {
        image(arrow4img,450,50);
        image(arrow4img,450,450);
      }

    //DRAW BALL AND GOAL ZONE
      fill(155,200,50);
      ellipse(100,500,50); //draw the goal zone
      fill(255);
      ellipse(ballx,bally,100); //draw the ball

      //COLLISION CHECKS
      hitwin = collideCircleCircle(100,500,50,ballx,bally,100);

      //Check if the ball is touching a direction-change arrow:
      hitarrow = collideRectCircle(450,50,100,100,ballx,bally,100);
      hitarrow2 = collideRectCircle(450,450,100,100,ballx,bally,100);
      print("Touching Arrow 2? " + hitarrow2);

      //Check if mouse is touching the circle
      hit = collidePointCircle(mouseX,mouseY,ballx,bally,100);

      //Check for collision with obstacles:
      hitkill = collideRectCircle(obstacleX,obstacleY,100,50,ballx,bally,50);
      hitkill2 = collideRectCircle(obstacleX2,obstacleY2,50,100,ballx,bally,50);

    /*First, check if the player has lost, then check if the player has won or has pressed a key.*/
    if (hitkill == true || hitkill2 == true || ballx < 0 || ballx > width || bally < 0 || bally > height) {
      diesound.play();
      ballx = 500;
      bally = 100;
      ballxSpeed = 0;
      ballySpeed = 0;
      ballcanmove= 0;
    }

    else if (hitwin) {
      winsound.play();
      print("Level " + level + " completed.");
      level = level + 1;
      ballx = 500;
      bally = 100;
      ballxSpeed = 0;
      ballySpeed = 0;
      ballcanmove= 0;
    }

    //Check for key presses.
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
  }

  else if (level == 5) {
    //SET UP LEVEL
      background(255);
      image(winscreen,0,0);

      textSize(24);
      fill(255);
      text("Congratulations! You beat the game!",width/5,height/1.5);
  }
}

function mousePressed() {
  //If the mouse is clicked and is touching the ball, unlock the ball's movement
  if (hit == true) {
    print("Object touched and mouse pressed.");
    ballcanmove = 1;
  }
}
