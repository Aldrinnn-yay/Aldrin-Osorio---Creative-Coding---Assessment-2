function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,255,255);
  noStroke();
  fill(42, 58, 94);
  ellipse(200,230,200,130);
  fill(218, 224, 237)
  ellipse(200,230,180,110);
  
  fill(42,58,94)
  rect(50,230,300,80);
  rect(197,170,6,100)
  
  fill(0);
  circle(120,300,80);
  circle(280,300,80);
  text("VROOM! VROOM!",100,100)
  
  fill(59, 62, 69)
  circle(120,300,40);
  circle(280,300,40);
}