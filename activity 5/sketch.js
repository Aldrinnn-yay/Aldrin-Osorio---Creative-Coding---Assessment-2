var word1="FRIDAY";
var font1;
function preload(){
  font1=loadFont("RASCAL__.TTF")
}

function setup() {
  createCanvas(400, 400); 
  background(255,255,255);
  fill(0);
  textSize(10)
  text("I don't care if Monday's blue, Tuesday's grey and Wednesday too, Thursday, I don't care about you,It's",70,100,200,50);
  text("im in love",230,300);
  fill(255,0,0);
  textFont(font1,120);
  textAlign(CENTER);
  text(word1,200,250)
  
  
}