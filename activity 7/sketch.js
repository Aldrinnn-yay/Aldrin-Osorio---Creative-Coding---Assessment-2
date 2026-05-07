let mic;
let rectHeight = 0//create variables

function setup() {
  createCanvas(410, 410);
  background(0);
  mic = new p5.AudioIn();
  mic.start();
}
function draw(){
  let micLevel = mic.getLevel() * height * 50;//this gets the audio and converts it into a value that is used for the height bars
  background(0);
  fill(98,75,129); //guts purple hehehe
  rect(10,height - micLevel - 50, 10, micLevel);//for the bars you see
  rect(30,height - micLevel - 50, 10, micLevel);
  rect(50,height - micLevel - 50, 10, micLevel);
  rect(70,height - micLevel - 50, 10, micLevel);
  rect(90,height - micLevel - 50, 10, micLevel);
  rect(110,height - micLevel - 50, 10, micLevel);
  rect(130,height - micLevel - 50, 10, micLevel);
  rect(150,height - micLevel - 50, 10, micLevel);
  rect(170,height - micLevel - 50, 10, micLevel);
  rect(190,height - micLevel - 50, 10, micLevel);
  rect(210,height - micLevel - 50, 10, micLevel);
  rect(230,height - micLevel - 50, 10, micLevel);
  rect(250,height - micLevel - 50, 10, micLevel);
  rect(270,height - micLevel - 50, 10, micLevel);
  rect(290,height - micLevel - 50, 10, micLevel);
  rect(310,height - micLevel - 50, 10, micLevel);
  rect(330,height - micLevel - 50, 10, micLevel);
  rect(350,height - micLevel - 50, 10, micLevel);
  rect(370,height - micLevel - 50, 10, micLevel);
  rect(390,height - micLevel - 50, 10, micLevel);
}