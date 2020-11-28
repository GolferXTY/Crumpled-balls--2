
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, bin, ground, b2, b3 ,binIm, bim2, bim3, roof;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 200);
    

	ground = new Ground(400, 380, 800, 10);

	 bin = new Bin(700, 380, 150, 10);
	 b2 = new Bin(620, 325, 10, 100);
	 b3 = new Bin(780, 325, 10, 100);

	 binIm = createSprite(705, 325, 10, 100);
	 binIm.shapeColor = "green";
	 bim2 = createSprite(780, 325, 10, 100);
	 bim2.shapeColor = "green";
	 bim3 = createSprite(620, 325, 10, 100);
	 bim3.shapeColor = "green";
	 roof = createSprite(705, 275, 180, 10);
	  roof.shapeColor = "green";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 

  paper.display();
  ground.display();
  bin.display()
  b2.display();
  b3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body, paper.body.position, {x:120, y:-120});

	}
}