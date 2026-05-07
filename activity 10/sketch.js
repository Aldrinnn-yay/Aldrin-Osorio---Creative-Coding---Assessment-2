//welcome one and all to this minigame!
//its a very simple game just avoid the slimes that are falling:)

let knight;
let slime;
let myfont;
let xpos = 225;
let ypos = 0;
let speed = 10;
let hp = 100
let score = 0;
let end = false;
let begin = false;

function preload(){
  knight=loadImage('pixil-frame-0.png');
  slime=loadImage('pixil-frame-0 (2).png');
  myfont=loadFont('PressStart2P-Regular.ttf');//the images pluss a font i wanted to use
}

function setup() {
  createCanvas(500, 400);
}

function keyPressed() {
    if (key === 's') { //for the start
    hp = 100;
    score = 0;
    speed = 10;
    ypos = 0;
    xpos = 225;
    end = false;
    begin = true;
    }
    else if (key===' '){//for the restart
    hp = 100;
    score = 0;
    speed = 10;
    ypos = 0;
    xpos = 225;
    end = false;
    begin = true;
    }
}

function draw() {
  if (!begin){
    background(0)
    fill(171, 196, 219)
    textAlign(CENTER)
    textFont(myfont,15)
    text("Avoid the falling slimes!!!",width/2,height/2)
    textAlign(CENTER)
    textSize(10)
    text("press 's' to start",width/2,300)// for intro
  }
  else if (end){
    background(0);
    fill(171, 196, 219);
    textAlign(CENTER);
    textFont(myfont,40);
    text("Game Over:(",width/2,height/2);
    textAlign(CENTER);
    textSize(10);
    text("press the space button to restart",width/2,300);
    text("Score: "+ score,width/2,350);//for the end screen
  }
  else{
    if (frameCount % 10 == 0 && !end) {
    score ++;// for the score
    }
    background(171, 196, 219);
    image(slime,xpos,ypos += speed,100,100);
    if (ypos > height){
    ypos=0;
    xpos=random(width);//code for the slime to fall down
  }
  
  if (dist(xpos, ypos, mouseX,350) < 50){
    ypos=0;
    xpos=random(width);
    speed+=0.5;
    hp -= 10;//code for the coalition, if the slime hits the user, their health goes down and the speed goes up
  }
  fill(0)
  textSize(10);
  text("Health: ",50,50);
  textFont(myfont,10);
  text(hp,150,50);
  textSize(10);
  text("Score: ",50,70);
  textFont(myfont,10);
  text(score,150,70);//for the scores and healthpoints at top
  
  
  if (hp == 0){//if the user has a no more health the game ends
    end = true;
  }
    
  imageMode(CENTER);
  image(knight,mouseX,350,50,50);// the knight that the user plays
  }
}