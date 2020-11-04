// renaming
const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, object;

function setup() { 
  createCanvas(400,400); 
  // creating
  engine = Engine.create();
  world = engine.world;
  
  // box is to be like Box class and same for ground
  box1 = new Box(200,350,50,50)
  box2 = new Box(240,100,50,50)
  ground = new Ground(200,390,400,20);
  }

  function draw() {
    background("orange");
    Engine.update(engine);
    // it should be visible
    box1.display()
    box2.display()
    ground.display();
  }