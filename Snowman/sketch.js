  //Title: Snowman. Finished 3/7/2019 by Cmacd1
function setup() {
  createCanvas(400,400);
  background(110, 168, 255);
}

function draw() {
//sky


//ground
  rect(0,350,399,49);
  
//snowman body
  //bottom circle
  ellipse(200, 300, 150, 150);
  //middle circle
  ellipse(200, 200, 100, 100);
  //top circle
  ellipse(200, 120, 75, 75);

//snowman arms
  line(160,200,80,100);
  line(240,200,320,100);
}
