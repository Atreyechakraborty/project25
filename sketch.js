
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dustbinImg=loadImage("dustbin.png")	
}

function setup() {
	createCanvas(800, 700);


	box1= createSprite(400,600,200,20)
	box1.shapeColor=color("white")
	box1.addImage(dustbinImg)

	box1.scale=0.3

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
 
}



