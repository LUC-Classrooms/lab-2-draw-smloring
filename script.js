function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(200, 200, 800); 
  // add your drawing code here ...
  fill (850, 200, 110)
  ellipse(width/2 - 3, height/3, 60, 100)
  fill (0, 0, 200)
  triangle(width/2 + 80, height/1 - 2, width/2- 20, height/1 - 20, width/2 - 30, height/2 - 43)
  fill (100, 300, 0)
  ellipse(width/2 + 20, height/3, 10, 20) //eye 
  strokeWeight(3)
  fill (200, 300, 600)
  ellipse(width/3 - 35, height/2 - 30, 210, 100) //top wing
  ellipse(width/2 - 83, height/2, 110, 50) //bottom wing 
  stroke(0); // 
  strokeWeight(2);
  line(width/2 - 30, height/2 - 43, width/2 - 30, height/2 - 80);
  strokeWeight(5)
  strokeCap(ROUND);
  line(300, 275, 350, 140);
  fill(30)
 

  strokeWeight(5)
}
