const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var ground1,stand;
var box1,box2,box3,box4;
var box4,box6,box7,box8,box9,box10;
var slingshot,polygonImg,polygon1;
var score = 0;

function preload(){
  polygonImg = loadImage("hexagon/images.jpg");
}


function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  stand = new ground(600, 605, 600, 70);
  box1 = new Box(650,550,100,50);
  box2 = new Box(750,550,100,50);
 box3 = new Box(850,550,100,50);
 box4 = new Box(950,550,100,50);
 box5 = new Box(675,500,100,50);
 box6 = new Box(775,500,100,50);
 box7 = new Box(875,500,100,50);
 box8 = new Box(700,450,100,50);
 box9 = new Box(800,450,100,50);
 box10 = new Box(725,400,100,50);
 polygon1 = new polygon(250,300,55);
slingshot = new SlingShot(polygon1.body,{x:150,y:250});

Engine.run(engine);

}

function draw() {
  background(0);  
  //Engine.update(engine);
  stand.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
polygon1.display();
slingshot.display();
box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
noStroke();
fill("white");
text("SCORE : "+score,300,100);
  //imageMode(CENTER);
  //image(polygonImg,polygon1.position.x,polygon1.position.y,50,50);
  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon1.body);
  }
}

