function setup() {
  createCanvas(800,600);
  textSize(150);
  
}

function draw() {
  background(255,255,200);
  
  var t = floor(millis()%1000); //perpadeig fictiu

if (t<500){
  
  text("BLINK",20,200);
  
}
  
}