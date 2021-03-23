
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var bin,binImg;

function preload(){
	binImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj=new Paper(200,300);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	  bin=createSprite(1198,530,20,20);
	  bin.addImage(binImg);
	  bin.scale=0.9;
	  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
 
//   text(mouseX + ',' +  mouseY,10,40);

  paperObj.display();
  groundObject.display();
  dustbinObj.display();

 	keyPressed();

	 drawSprites();


}

function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:50,y:-55});
		

	}
}

