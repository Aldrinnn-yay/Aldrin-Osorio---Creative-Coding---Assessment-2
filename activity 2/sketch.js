function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  //for the aliens body
  noStroke();
  fill(137, 204, 4);
  //for the head
  ellipse(200,100,100,50);
  triangle(200,140,250,106,150,106);
  //for the actual body
  triangle(200,140,250,250,150,250);
  //for the arms
  triangle(200,140,250,150,150,150);
  
  //for the black part of the eyes
  stroke(137,204,4);
  fill(0);
  ellipse(175,120,30,15);
  ellipse(225,120,30,15);
  //this is for the triangle between the legs
  noStroke();
  triangle(200,190,250,250,150,250);
  
  //for the white part of the eyes
  noStroke();
  fill(225,225,225);
  circle(185,118,5);
  circle(235,118,5);
  
  text("its an alien!",170,300)
}