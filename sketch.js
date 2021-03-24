var fixedRect, movingRect;

function setup() {

  createCanvas(800,400);
  fixedRect = createSprite(400, 100, 50, 50);
  movingRect = createSprite(400,200,70,80);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  movingRect.velocityY=-3;
  fixedRect.velocityY=3;
}

function draw() {
  background(255,255,255);  
 // movingRect.x=mouseX
  //movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
  }
else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
    fixedRect.velocityX*=(-1);
    movingRect.velocityX*=(1)

  }
  if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
      fixedRect.velocityY*=(-1);
      movingRect.velocityY*=(1)


    }
  drawSprites();
}