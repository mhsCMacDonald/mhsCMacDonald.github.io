  //Created by Charlie MacDonald Mar 18 2019
function setup() {
  createCanvas(800,600);


}

function draw() {
  let scale=100;
  //Allows house to be scaled. Renamed "houseWidth" to "scale". Avoid values >350.

  //Remove outline from all shapes:
  noStroke();

  //sky
  fill(135,206,250);
  rect(0,0,width,height);

  //sun
  fill(253,184,19);
  ellipseMode(CORNER)
  ellipse(scale/2,scale/2,scale/2,scale/2)

  //ground
  fill(44,176,55);
  rect(0,height/2+scale/2,width,height);

  //house body
  fill(203,65,84);
  rect(width/2,height/2,scale,scale/2);

  //windows
  fill(135,206,250);
  rect(width/2+scale/4,height/2+scale/4,scale/8,scale/6);
  rect(width/2+scale/1.26,height/2+scale/4,scale/8,scale/6);

  //chimney
  fill(140,38,52);
  rect(width/2+scale,height/2,-scale/5,-scale/2.5);

  //roof
  fill(139,79,57);
  triangle(width/2,height/2,width/2+scale/2,height/2-scale/2,width/2+scale,height/2);

  //door
  fill(160,82,45);
  rect(width/2+scale/2,height/2+scale/4,scale/6,scale/4);

}
