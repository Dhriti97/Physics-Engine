const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var e,w,ground;
function setup() {
  createCanvas(400,400);
  
  e=Engine.create();
  w=e.world;
  var ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,20,ground_option);
  
  World.add(w,ground);


  var ball_option={
    restitution:1.0
  }
  ball=Bodies.circle(200,125,30,ball_option);
  World.add(w,ball);
 // console.log(ground.position.x);
}

function draw() {
  background(0); 
  Engine.update(e); 
 rectMode(CENTER);
 fill("brown");
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  fill("yellow");
  ellipse(ball.position.x,ball.position.y,30,30);
}