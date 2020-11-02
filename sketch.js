const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig1,pig2,pig3;
var log1,log2,log3,log4;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,380,50,50);
    box2 = new Box(870,380,50,50);
    box3 = new Box(700,275,50,50);
    box4 = new Box(870,275,50,50);

    pig1=new pig(780,380);
    pig2=new pig(780,275);
    pig3=new pig(780,205);

    log1=new Log(780,305,245,20,PI/2);
    log2=new Log(780,240,245,20,PI/2);
    log3=new Log(750,165,120,20,PI/7);
    log4=new Log(810,165,120,20,-PI/7);

    bird1=new Bird(100,100);

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig1.display();
    pig2.display();
    pig3.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    ground.display();
    bird1.display();
}