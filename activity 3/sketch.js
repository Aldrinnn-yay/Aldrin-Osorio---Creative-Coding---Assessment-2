let picture;

function preload(){
  picture=loadImage('rohwedder-retro-phone-7362942_1920-Photoroom.png')
}

function setup() {
  createCanvas(400, 400);
  background(0);
  fill(255);
  clip(mask);
}

function mask(){
  rect(50,50,300,300)
}

function draw(){
  let x = random(width);
  let y = random(height);
  let r = random(50,50);
  noStroke();
  fill(random(225),random(225),random(225),20);
  ellipse(x,y,r,r);
  stroke(0);
  image(picture,100,100,200,200);
  fill(225,225,225)
  text("DIAL 1-800-COOL-GUY NOW!!!",130,height/2)
}