const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;
const Mouse=Matter.MouseConstraint

var engine, world,mouse;


function setup() {
 
  createCanvas(windowWidth/1.5,windowHeight/1.5);
  engine = Engine.create();
  
  world = engine.world;
  
pendulum1=new Pendulum(100,355,"green")
pendulum2=new Pendulum(200,355,"green")
pendulum3=new Pendulum(290,355,"green")
pendulum4=new Pendulum(360,355,"green")
pendulum5=new Pendulum(450,355,"green")

  rope1=new Sling (pendulum1.body,{x:120,y:50})
  rope2=new Sling (pendulum2.body,{x:200,y:50})
  rope3=new Sling (pendulum3.body,{x:280,y:50})
  rope4=new Sling (pendulum4.body,{x:360,y:50})
  rope5=new Sling (pendulum5.body,{x:420,y:50})


 /* let canvasmouse=Mouse.create(canvas.elt)
  canvasmouse.pixelRatio= pixelDensity();

let options={
  mouse:canavasmouse
}
mConstraint = MouseConstraint.create(engine,options)
World.add(world,mConstraint)*/
console.log("For every action there is  an equal and opposite reaction")
}



function draw() {
  background("#0F0E13"); 
  Engine.update(engine);
  
pendulum1.display()
pendulum2.display()
pendulum3.display()
pendulum4.display()
pendulum5.display()
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  //drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY)

textSize(30)
text("For every action there is  an equal and opposite reaction",140,445)

}

function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})
 
}

function mouseRelesed(){
  pendulum1.fly()
}
