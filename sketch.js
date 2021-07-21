var boy , boyrun , road , roadim , lb , rb 

function preload(){
  //pre-load images
  boy = loadAnimation("Runner-1.png","Runner-2.png");
  roadim = loadImage("path.png")
}

function setup(){
  createCanvas(600,500);
  //create sprites here
  road = createSprite(250,250);
  road.addAnimation("add",roadim);
  road.velocityY = 6 ;  
  lb = createSprite(90,350,20,200);
  lb.visible = false;
  rb= createSprite(420,350,20,200);
  rb.visible = false;
  boyrun = createSprite(250,400,20,20);
  boyrun.addAnimation("add",boy);
  boyrun.scale = 0.1;
}

function draw() {
  background("lightblue");
  if(road.y>500){
    road.y = height/2
  }
  if(keyIsDown(LEFT_ARROW)){
    boyrun.x = boyrun.x - 2
  }
  if(keyIsDown(RIGHT_ARROW)){
    boyrun.x = boyrun.x + 2
  }
  boyrun.collide(lb);
  boyrun.collide(rb);
  drawSprites();
}
