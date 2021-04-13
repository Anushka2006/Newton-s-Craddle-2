
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup(){
	createCanvas(660, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1= new Bob(120,630,100);
	bob2= new Bob(221,630,100);
	bob3= new Bob(322,630,100);
	bob4= new Bob(423,630,100);
	bob5= new Bob(524,630,100);
	ground2= new ground(320,70,690,40);
    rope1= new chain(bob1.body, ground2.body,-100*2,0);
    rope2= new chain(bob2.body,ground2.body,-50*2,0);
    rope3= new chain(bob3.body,ground2.body,-0*2,0);
    rope4= new chain(bob4.body,ground2.body,50*2,0);
    rope5= new chain(bob5.body,ground2.body,100*2,0);
    


	Engine.run(engine);
              
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  drawSprites();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 ground2.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 keyPressed();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:130,y:-155});
		
	}
}


