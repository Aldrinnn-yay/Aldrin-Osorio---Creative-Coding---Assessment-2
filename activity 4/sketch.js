function setup() {
  createCanvas(500, 500);
  background(0);
  
  for (let y = random (100); y<= 500; y +=100) {
  for(let x = random(100); x<= 500; x+=100) {
      fill(255,255,255)
      rect(y,x,random(50,70))
    }
  }
}