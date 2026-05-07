function setup() {
  createCanvas(500,500);
  background(0);
}

function draw() {
  stroke(225);
  fill(0);
  let a = random(2,50);
  ellipse(mouseX,mouseY,a)
}