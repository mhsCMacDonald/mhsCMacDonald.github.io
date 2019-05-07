/* U4L11 - Decision Structures
Created by Charlie MacDonald on May 3rd, 2019*/

//Create a level for the instructions page, the questions, and the win/loss page.
  let level = 0

//Create variables indicating the # correct or incorrect.
  let correct=0;
  let incorrect=0;

function setup() {
  var firstCanvas = createCanvas(800,600);  //create window for drawing
  firstCanvas.parent('call sketch.js');  //allow this code to be called by <div id="call sketch.js"> in index.html
  frameRate(60);
}

function draw() {
//START/RESTART CODE:
  /*If the player presses enter, set the program to the first question. I placed this
  code first so the player can restart at any time. */
  if (keyIsDown(ENTER)) {
    level = 1;
    correct = 0;
    incorrect = 0;
    print("The level is now:"); print(level); //print variables for debug purposes
  }

  //INSTRUCTIONS PAGE:
  else if (level === 0) {
    background(200); //draw a background over previous objects:

    textSize(20);
    fill(0);
    text("Welcome to my multiple choice quiz. Press one of 4 keys to answer 3 questions.",width/24,height/12);
    text("Press Enter to start or to restart the quiz.",width/24,height/12+50);
    textSize(10);
    text("Psst, the second answer for each quesiton will be the correct one.",width/24,height/12+100);
  }

  //QUESTION 1:
  else if (level === 1) {

    //Change background, display the question and answers.
    background(255);

    textSize(20);
    fill(0);
    text("What is 2^4? Is it...",width/24,height/12);
      text("A) 8",width/24,height/12+50);
      text("B) 16",width/24,height/12+100);
      text("C) 8",width/24,height/12+150);
      text("D) 24",width/24,height/12+200);

    //These "if" statements check what key/answer was selected, in order from A to D.
    if (keyIsDown(65)) {
      incorrect = incorrect+1;
      level = level + 1;
      print(incorrect); print("... of your answers are incorrect"); //print variables for debug purposes
    }

    if (keyIsDown(66)) {
      correct = correct+1;
      level = level + 1;
      print(correct); print("... of your answers are correct"); //print variables for debug purposes
    }

    if (keyIsDown(67)) {
      incorrect = incorrect+1;
      level = level + 1;
      print(incorrect); print("... of your answers are incorrect"); //print variables for debug purposes
    }

    if (keyIsDown(68)) {
      incorrect = incorrect+1;
      level = level + 1;
      print(incorrect); print("... of your answers are incorrect"); //print variables for debug purposes
    }
  }

  //QUESITON 2:
  else if (level === 2) {
    //Change background, display the question and answers.
    background(255);

    textSize(20);
    fill(0);
    text("What is 1+2?",width/24,height/12);
      text("E) 12",width/24,height/12+50);
      text("F) 3",width/24,height/12+100);
      text("G) 2",width/24,height/12+150);
      text("H) Window",width/24,height/12+200);

    //These "if" statements check what key/answer was selected, in order from A to D.
    if (keyIsDown(69)) {
      incorrect = incorrect+1;
      level = level + 1;
      print(incorrect); print("... of your answers are incorrect"); //print variables for debug purposes
    }

    if (keyIsDown(70)) {
      correct = correct+1;
      level = level + 1;
      print(correct); print("... of your answers are correct"); //print variables for debug purposes
    }

    if (keyIsDown(71)) {
      incorrect = incorrect+1;
      level = level + 1;
      print(incorrect); print("... of your answers are incorrect"); //print variables for debug purposes
    }

    if (keyIsDown(72)) {
      incorrect = incorrect+1;
      level = level + 1;
      print(incorrect); print("... of your answers are incorrect"); //print variables for debug purposes
    }
  }

  //QUESITON 3:
  else if (level === 3) {
    //Change background, display the question and answers.
    background(255);

    textSize(20);
    fill(0);
    text("What is pi?",width/24,height/12);
      text("I) A circle-shaped food",width/24,height/12+50);
      text("J) 3.14",width/24,height/12+100);
      text("K) 3",width/24,height/12+150);
      text("L) 3.24",width/24,height/12+200);

    //These "if" statements check what key/answer was selected, in order from A to D.
    if (keyIsDown(73)) {
      incorrect = incorrect+1;
      level = level + 1;
      print(incorrect); print("... of your answers are incorrect"); //print variables for debug purposes
    }

    if (keyIsDown(74)) {
      correct = correct+1;
      level = level + 1;
      print(correct); print("... of your answers are correct"); //print variables for debug purposes
    }

    if (keyIsDown(75)) {
      incorrect = incorrect+1;
      level = level + 1;
      print(incorrect); print("... of your answers are incorrect"); //print variables for debug purposes
    }

    if (keyIsDown(76)) {
      incorrect = incorrect+1;
      level = level + 1;
      print(incorrect); print("... of your answers are incorrect"); //print variables for debug purposes
    }
  }

  //End screen:
  else if (level === 4) {
    //Change background, display the question and answers.
    background(255);

    textSize(20);
    fill(0);
    text("Congratulations. You got",width/24,height/12);
      text(correct,width/24,height/12+50);
      text("... questions right and",width/24,height/12+100);
      text(incorrect,width/24,height/12+150);
      text("... questions wrong.",width/24,height/12+200);
    text("Press Enter to retry the quiz.",width/24,height/12+250);
  }

}
