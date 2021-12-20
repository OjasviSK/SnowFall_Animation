const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var person, personimg;

function preload(){

  bg = loadImage("snow2.jpg");
  personimg = loadImage("person.png");
}

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(windowWidth,windowHeight);


  person =createSprite(windowWidth/2, windowHeight/2, 50, 50);
  
  person.velocityX = -2;
  person.addImage(personimg)
  
  ground = createSprite(windowWidth/2, windowHeight,windowWidth,20);

  



}

function draw() {
  Engine.update(engine);
  background(bg);  
  person.velocityY = person.velocityY+0.8;

  person.bounceOff(ground)

  drawSprites();
}