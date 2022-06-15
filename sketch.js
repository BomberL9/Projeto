const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane, block1, block2, rotator1, rotator2, rotator3, angle1, angle2, angle3;

function preload()
{
	
}

function setup() {
	createCanvas(500, 650);


	engine = Engine.create();
	world = engine.world;

	var plane_options = {
		isStatic: true
	};
	var block1_options = {
		isStatic: true
	};
	var block2_options = {
		isStatic: true
	};
	var rotator_options = {
		isStatic: true
	};
	
	//Crie os Corpos aqui.
	plane = Bodies.rectangle(250, 650, 500, 20, plane_options);
	World.add(world, plane);

	
	block1 = Bodies.rectangle(120, 450, 120, 20, block1_options);
	World.add(world, block1);

	block2 = Bodies.rectangle(350, 450, 120, 20, block2_options);
	World.add(world, block2);


	rotator1 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
	World.add(world, rotator1);
	
	rotator2 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
	World.add(world, rotator2);
	
	rotator3 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
	World.add(world, rotator3);
	
	angle1 = 60;
	World.add(world, angle1);
	
	angle2 = 60;
	World.add(world, angle2);

	angle3 = 60;
	World.add(world, angle3);


	Engine.run(engine);
}


function draw() {
  background("blue");
  rectMode(CENTER);
  ellipseMode(CENTER);
  fill("red");
  
  Engine.update(engine);
  
  //desenha o solo
  rect(plane.position.x, plane.position.y, 500, 20);
  
  //desenha os blocos 
  rect(block1.position.x, block1.position.y, 120, 20);
  rect(block2.position.x, block2.position.y, 120, 20);

  //desenha os rotatores
  rect(rotator1.position.x, rotator1.position.y, 150, 20);
  rect(rotator2.position.x, rotator2.position.y, 150, 20);
  rect(rotator3.position.x, rotator3.position.y, 150, 20);

  //gira os rotatores
  Matter.body.rotate(rotator1, angle1);
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect(0, 0, 150, 20);
  pop();
  angle1 += 0.2;

  Matter.body.rotate(rotator2, angle2);
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  pop();
  angle2 += 0.8;
  
  Matter.body.rotate(rotator3, angle3);
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  pop();
  angle3 += 1.4;
  
 
  drawSprites();
 
}



