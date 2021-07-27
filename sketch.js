var database;
var boy,bimg


function  preload() {

bimg = loadImage("player-2/p1.png")


  
}

function setup() {

  database = firebase.database();

  createCanvas(displayWidth , displayHeight);
  
  boy=createSprite(400, 200, 50, 50);
boy.addImage("yo",bimg)

}


function draw() {
  background(255,255,255);  
  drawSprites();
}