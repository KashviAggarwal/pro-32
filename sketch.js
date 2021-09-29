
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var blower,blowerMouth
var ball,button;
var net;

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;
 
  blower = new Blower(500,400,180,180);
  blowerMouth = new Blower(260,485,300,10);
  ball = new Ball(500,200,20);

  net = new Net(750,300,20,20)
  button = createButton("Click to blow");
  button.position(100 , 300);
  button.class("blowButton");
  button.mouseClicked(blow);
}
function draw() {
  background("grey");
  Engine.update(engine);
  blower.show();
  blowerMouth.show();
  ball.show();
  net.show();
  if(ball.body.position.x > 750){
    text("you won",300,300)
  }
  text("To win , let the ball touch net",50,50)
}

 function blow(){
   Matter.Body.applyForce(ball.body,{x:0,y:0}, {x:0.01 ,y : -0.05});
 }

