var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 650, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	myWorld = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(myWorld, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(myWorld, ground);

	box1=new Box(300,580,20,120)
	box2=new Box(370,625,120,20)
	box3=new Box(440,580,20,120)    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  box1.display()
  box2.display()
  box3.display()
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)
    
  }
 if (keyCode === LEFT_ARROW) {
	helicopterSprite.x=helicopterSprite.x-2  
 } 
 if (keyCode === RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+2
 }
}



