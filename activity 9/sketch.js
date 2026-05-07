let table;
function preload(){
  table = loadTable('Untitled spreadsheet - Sheet1.csv','csv','header')//preloads the database for the program to read
}
function setup() {
  createCanvas(610, 500);
  background(255);
  textSize(50);
  text("UAE POPULATION 2025",25,80);
  textAlign(CENTER);//for the text at the top
  
  let barWidth = 50;
  
  for (let i = 0; i < table.getRowCount();i++){
    let n = table.getString(i,'Nationality');
    let p = table.getNum(i,'Population');
    let ep = table.getNum(i,'Percentage');//how the program will read the values
    
    let x = 10 + i * (barWidth + 10);
    let h = map(p, 0,5, 0, height);  
    noStroke();
    fill(150, 208, 214);//the color of the bars
    rect(x, height-h, barWidth,h);//for the bars
    
    fill(0);
    textAlign(CENTER);
    textSize(9);
    text(n, x + barWidth / 2, height - 20);
    text(p + ' Million', x + barWidth / 2, height - 30);//the text at the bars
    text(ep + '%', x + barWidth / 2, height - 40,);
  }
}
