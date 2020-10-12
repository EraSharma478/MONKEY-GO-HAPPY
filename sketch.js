   var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var survival_time = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);

  //creating monkey
  monkey=createSprite(80,320,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityx=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
}

function draw() {
background(225);
  text("Survival Time: "+score, 250, 50);
  
  if(ground.x<0){
     ground.x=ground.width/2;
     }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  drawSprites();
  bananas();
  obstacles(); 
}

function bananas(){
  if (frameCount % 80 === 0){
    banana = createSprite(350,250,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage("banana", bananaImage);
    banana.velocityX=-4;
    banana.scale = 0.1;
  }
}

function obstacles(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(250,320,50,50);
    obstacle.addAnimation("obstacle", obstacleImage);
    obstacle.scale = 0.13 ;
    obstacle.velocityX=-4;
  }
}