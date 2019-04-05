//This sketch.js file is the group version. Group members: Abdol, Charlie, Matt, and Tina.

//Group tips and notes:
  //MAKE COMMENTS TO TALK @Tina -Put your name after a comment so we know who it is @charlie
  //The face will be male. It will be based on two trapezoids and a rectangle.
  /*tip: use the center of the canvas as a reference point. It makes it easier
  to scale shapes. Start with width/2 or height/2 and go from there.*/

let Facewidth = 100;
let Faceheight = 150;

function setup() {
  createCanvas(1280,850);
  background(127);
}

function draw() {
  drawEars();
  drawFace();
  drawNose();
  drawNeck();
  drawBeard();



  /*------------------draw the eyebrows ABDOL--------*/
  let x=width/2-Facewidth*1.5;
  let y=height/2-Faceheight*1.35;

  drawBrows(x,y);

  x=width/2+Facewidth/2;
  drawBrows(x,y);
  drawMouth();


  /*----------Draw the eyes=@Abdol + Glasses by Charlie-----------*/
  x=width/2+Facewidth;
  y=height/2-Faceheight;
  let z=-1; /*this Z value will make the drawGlasses function draw the glasses'
  two "arms" in opposite directions, instead of in the same direction @Charlie*/

  drawEye(x,y);
  drawGlasses(x,y,z);

  x=width/2-Facewidth;
  y=height/2-Faceheight;
  z=1;
  drawEye(x,y);
  drawGlasses(x,y,z);

  /*------------------Draw hair @Abdol-------------*/
  drawHair();

}


/*--------------------------------/Functions/-----------------------*/
function drawGlasses(newX,newY,newZ){
//Glasses and frame by Charlie
  stroke(169,169,169);
  strokeWeight(5); //create an outline that looks like a lens-holder thing

  line(newX+newZ*Facewidth*0.75,newY-Faceheight/4,newX+newZ*Facewidth*1.2,newY-Faceheight/4);
  /*This code draws a line connecting the two lenses. Technically, this line of code isn't
  needed here since "drawGlasses" is called/will draw ths line twice, but I wanted to bundle this line
  with the rest of the glasses-related code to make things more organized. @Charlie*/

  fill(161,202,241,200); //4th number adjusts transparency of lenses
  rectMode(CENTER);
  rect(newX,newY,Facewidth*1.5,Faceheight/1.5, 15, 15, 15, 15); //glass lenses: last 4 numbers make them round
  line(newX-newZ*Facewidth*0.75,newY-Faceheight/4,newX-newZ*Facewidth*1.2,newY-Faceheight/3.5);
  //the line above draws the 2 long "arms" of the glasses. newZ changes the direction the arms start and end at.

  //The next 4 lines set stroke/rectmode/fill back to their defaults, to avoid messing up others' shapes
  strokeWeight(2);
  rectMode(CORNER);
  fill(0);
  stroke(0,0,0,0);
}

//Draw the eyes Function @Abdol
function drawEye(newX,newY){
  stroke(0);
  fill(255);
  ellipseMode(CENTER);
  ellipse(newX,newY,Facewidth,Facewidth/2);
  fill(161, 202, 241);
  ellipse(newX,newY,Facewidth/3,Facewidth/3);
  fill(0);
  ellipse(newX+5,newY,Facewidth/9,Facewidth/9);
}

function drawFace(){
//Draw the head. Has the ability to scale. @Charlie
  fill(255,224,189);
  stroke(230,202,171);
  fill(230,202,171);
  //the code below draws the upper face: bottom left corner, bottom right, top right, and finally top left
  quad(width/2-Facewidth*2.4,height/2-Faceheight/1.25, width/2+Facewidth*2.4,height/2-Faceheight/1.25, width/2+Facewidth*1.75,height/2-Faceheight*2, width/2-Facewidth*1.75,height/2-Faceheight*2);
  //the code below draws the midlde face: top left corner, top right, bottom right, and finally bottom left
  quad(width/2-Facewidth*2.4,height/2-Faceheight/1.25, width/2+Facewidth*2.4,height/2-Faceheight/1.25, width/2+Facewidth*2.4,height/2+Faceheight/1.25, width/2-Facewidth*2.4,height/2+Faceheight/1.25);
  //the code below draws the chin: top left, top right, bottom right, and finally bottom left
  quad(width/2-Facewidth*2.4,height/2+Faceheight/1.25, width/2+Facewidth*2.4,height/2+Faceheight/1.25, width/2+Facewidth*1.75,height/2+Faceheight*2, width/2-Facewidth*1.75,height/2+Faceheight*2);
}

function drawNose(){
//Draw the nose @Matt
  fill(255,224,189);
  triangle(width/2-Facewidth/2.5,height/2+Faceheight/3,width/2,height/2-Faceheight/6,width/2+Facewidth/2.5,height/2+Faceheight/3);
  fill(0);
  ellipse(width/2-Facewidth/5.25,height/2+Faceheight/4,Facewidth/5,Facewidth/5);
  ellipse(width/2+Facewidth/5.25,height/2+Faceheight/4,Facewidth/5,Facewidth/5);
}

// Draw the eyebrows Function @ Abdol
function drawBrows(newX,newY){
  rect(newX,newY,Facewidth,Facewidth/6.66);
  triangle(newX,newY,newX-Facewidth/10,newY+Facewidth/10,newX+Facewidth/35,newY+Facewidth/5.8);
  rect(newX,newY,Facewidth/2,Facewidth/6);

}

function drawNeck(){
//draw the neck and shoulders @Matt
  fill(255,224,189)
  rect(width/2-Facewidth*1.15,height/2+Faceheight*2.01,Facewidth*2.25,Faceheight/3);
  stroke(0);
  fill(66, 158, 244)
  rect(width/2-Facewidth*2.90,height/2+Faceheight*2.33,Facewidth*5.75,Faceheight/1.5, 50, 50, 0, 0);
}


/*-----------------------Draw Hair Function @ABDOL--------------*/
function drawHair(){
  noStroke();
  fill(0);
  quad(width/2-Facewidth*1.75,height/2-Faceheight*2,width/2-Facewidth*2,height/2-Faceheight/2,width/2-Facewidth*2.5,height/2-Faceheight/3,width/2-Facewidth*2.5,height/2-Faceheight*1.8);
  quad(width/2-Facewidth*2.5,height/2-Faceheight*1.8,width/2-Facewidth*1.75,height/2-Faceheight*1.6,width/2-Facewidth*1.1,height/2-Faceheight*2.5,width/2-Facewidth*2.2,height/2-Faceheight*2.5);
  quad(width/2+Facewidth,height/2-Faceheight*2.5,width/2+Facewidth/2,height/2-Faceheight*1.7,width/2-Facewidth*1.75,height/2-Faceheight*1.7,width/2-Facewidth*2.2,height/2-Faceheight*2.5);
  quad(width/2+Facewidth,height/2-Faceheight*2.5,width/2+Facewidth/2,height/2-Faceheight*1.7,width/2+Facewidth*2,height/2-Faceheight*1.3,width/2+Facewidth*2,height/2-Faceheight*2);
  quad(width/2+Facewidth*2,height/2-Faceheight*2,width/2+Facewidth*2,height/2-Faceheight/2,width/2+Facewidth*2.5,height/2-Faceheight/3,width/2+Facewidth*2.5,height/2-Faceheight*1.8);
  triangle(width/2+Facewidth/2,height/2-Faceheight*1.7,width/2+Facewidth*2,height/2-Faceheight,width/2+Facewidth*2.5,height/2-Faceheight*1.2);
  triangle(width/2-Facewidth*2,height/2-Faceheight*1.6,width/2-Facewidth*2,height/2-Faceheight,width/2-Facewidth/1,height/2-Faceheight*2.6);
}

/*--------------Draw Mouth---------*/
// @Tina
function drawMouth(){
  stroke(0);
  line(width/2-Facewidth/2,height/2+Faceheight,width/2+Facewidth/2,height/2+Faceheight);

}


/*----------Draw Facial Hair @Abdol, Matt------*/
function drawBeard(){
  noStroke();
  fill(42, 43, 42);
  //beard: top left, top right, bottom right, and finally bottom left
  quad(width/2-Facewidth*2.1,height/2+Faceheight*1.5, width/2+Facewidth*2.1,height/2+Faceheight*1.5, width/2+Facewidth*1.75,height/2+Faceheight*2, width/2-Facewidth*1.75,height/2+Faceheight*2);
  quad(width/2-Facewidth*1.6,height/2+Faceheight*1.5, width/2-Facewidth*2.1,height/2+Faceheight*1.5,width/2-Facewidth*2.4,height/2+Faceheight/1.25,width/2-Facewidth*2,height/2+Faceheight/1.25);
  quad(width/2+Facewidth*1.6,height/2+Faceheight*1.5, width/2+Facewidth*2.1,height/2+Faceheight*1.5,width/2+Facewidth*2.4,height/2+Faceheight/1.25,width/2+Facewidth*2,height/2+Faceheight/1.25);

}

//draw the ears @tina
function drawEars(){
  noStroke();
  fill(230,202,171);
  ellipse(width/4+Facewidth/1.4,height/2-Facewidth,Facewidth/2,Faceheight/2+Faceheight/2);
  ellipse(width*3/4-Facewidth/1.4,height/2-Facewidth,Facewidth/2,Faceheight/2+Faceheight/2);
}
