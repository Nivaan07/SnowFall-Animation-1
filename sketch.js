var snowBack,snowback;


function preload(){
  snowBack = loadImage("snow3.jpg")
  

function setup() {
  createCanvas(600,200);

  snowback = createSprite(200,180,400,20);
  snowback.addImage("background",snowBack);

  

function draw() {
  background(255,255,255);  
  drawSprites();
}
}
}