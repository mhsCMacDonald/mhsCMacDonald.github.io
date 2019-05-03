/* U4L10 - Sounds and Images
Created by Charlie MacDonald on May 2nd, 2019*/

//Create variables that will hold the images and sounds to allow them to be called later
let mySound;
let img;

function preload() {
  //Load the files into the variables before any other code is run:
  mySound = loadSound('Sounds/PianoC5.mp3');
  img = loadImage('Images/PianoKeyboard.png');
}

function setup() {
  var firstCanvas = createCanvas(300,300);  //create drawing window
  firstCanvas.parent('call sketch.js');  //allow this code to be called by <div id="call sketch.js"> in index.html
  mySound.setVolume(0.3); //Set volume to 30%
  mySound.play();
}

function draw() {
  background(200);
  image(img,25,25);
}

function mouseClicked() {
  //When the mouse is clicked, play the sound again:
  mySound.play();
}
