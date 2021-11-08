const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball,ball2,ball3,ball4,ball5;
var con,con2,con3,con4,con5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options = {
		restitution: 0.8
	  }

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(200,50,10,ball_options);
	World.add(world,ball);
  
	ball2 = Bodies.circle(300,50,10,);
	World.add(world,ball2);
  
	con=Matter.Constraint.create({
	  pointA:{x:200,y:20},
	  bodyB:ball,
	  pointB:{x:0,y:0},
	  length:100,
	  stiffness:0.1
	});
  
	con2=Matter.Constraint.create({
	  
	  pointA:{x:300,y:90},
	  bodyB:ball2,
	  pointB:{x:0,y:0},
	  length:100,
	  stiffness:0.1
	})
  
	World.add(world,con);
	World.add(world,con2);
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
	
  



	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10)
  
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  pop();  
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
