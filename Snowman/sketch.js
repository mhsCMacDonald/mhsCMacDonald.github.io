//Title: Snowman. Finished 3/7/2019 by Cmacd1
function setup() {
  // put setup code here
  createcanvas(640,480);
}

function draw() {
  //ground
  rect(0,350,400,100);

  //snowman body
  ellipse(200, 300, 150, 150);
  ellipse(200, 200, 100, 100);
  ellipse(200, 120, 75, 75);

  //snowman arms
  line(160,200,80,100);
  line(240,200,320,100);
}
