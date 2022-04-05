var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {

//Load trex animation
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

//Loading trex image
trex_collided = loadImage("trex_collided.png");

//Loading ground image
groundImage = loadImage("ground2.png")

}

function setup() {

//create canvas
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
//Divide ground by half
ground.x = ground.width /2;
//Negative X velocity - Right to left
ground.velocityX = -4;

//create invisible ground and set invisiblity false
invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = false;
  
}

function draw() {

//Background color - white
background(220);

//jump when the space button is pressed
if (keyDown("space") && trex.y >=100) {
  trex.velocityY = -10;
}

//add velocity Y to trex
trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

//trex colliding with invisible ground
trex.collide(invisibleGround);

drawSprites();
}