//tw:flashing lights

//all my variables
var word1="drop dead - olivia rodrigo";
var font1;
let amp;
function preload(){
  font1=loadFont("Punk Typewriter.otf")// font
  sound = loadSound('drop dead.mp3');//by liv:D
}

function setup() {
  createCanvas(410, 410);
  sound.loop();//makes the song loop
  amp=new p5.Amplitude();
}

function draw() {
  background(0);
  let Level = amp.getLevel();
  // for the color of the circle
  fill(245, 206, 231);
  stroke(255);
  //creates the circle
  let a = map(Level, 0,1,0,width / 2);
  circle(width / 2, height / 2, a * 5);
  
  
  //for the "drop dead" text
  noStroke();
  fill(0);
  textFont(font1,25);
  textAlign(CENTER);
  text(word1,205,210)
}