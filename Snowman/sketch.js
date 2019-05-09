/* U4L4 - Snowman Drawing
Finished by Charlie MacDonald on March 7th, 2019*/

function setup() {
  createCanvas(400,400);
  background(110, 168, 255); //sky
}

function draw() {
//ground
  rect(0,350,399,49);

//snowman body, bottom to top
  ellipse(200, 300, 150, 150);
  ellipse(200, 200, 100, 100);
  ellipse(200, 120, 75, 75);

//snowman arms, left then right
  line(160,200,80,100);
  line(240,200,320,100);
}
