const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ball;
var blower;
var blowmouth;
var button;

function setup() {
  createCanvas(1000,800);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(400, 200, 30);
  blower = new Blower(400, 300, 140, 140);
  blowmouth = new Blowmouth(255, 350, 150, 40);

  button = createButton("Click to blow");
  button.position(600, 350);
  button.class("blowButton");
  button.mousePressed(blow)
}

function draw() {
  background("orange");  
  Engine.update(engine);

  ball.display();
  blower.display();
  blowmouth.display();
}

function blow() {
  Matter.Body.applyForce(ball.Body, {x: 0, y: 0}, {x: 0, y: 95})
}