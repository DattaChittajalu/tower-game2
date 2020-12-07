const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


function preload(){
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	

	
    groundObject=new ground(width/2,600,width,20);
    ground1=new ground(600,400,300,10)
    ground2=new ground(1050,300,300,10)

	stone1=new Stone(230,300,30)
    slingshot=new SlingShot(stone1.body, {x:230,y:300})
    
    block1=new block(600,370)
    block2=new block(650,370)
    block3=new block(550,370)
    block4= new block(500,370)
    block5=new block(700,370)
    block6=new block(675,250)
    block7=new block(625,250)
    block8=new block(575,250)
    block9=new block(525,250)
    block10= new block(650,200)
    block11=new block(600,200)
    block12=new block(550,200)
    block13=new block(575,150)
    block14=new block(625,150)
    block15=new block(600,100)

    block16=new block(1050,270)
    block17=new block(1000,270)
    block18= new block(1100,270)
    block19= new block(1025,170)
    block20= new block(1075,170)
    block21=new block(1050,120)

	Engine.run(engine);

}

function draw() {

  background(230);
  

 
  stone1.display()
  slingshot.display()
	
  groundObject.display();
  ground1.display()
  ground2.display()

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
	slingshot.fly(stone1.body)
}

function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(stone1.body, {x:230, y:410})
		slingshot.attach(stone1.body)
	}
}
