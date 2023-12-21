const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
var blockimg,pigimg,backgroundimg,tntimg,woodimg,shotimg,stoneimg,angerBirdimg
var bg
var ground
var box
var shoot
var shootting
var slimshot
var bird
var pig

var log1
var log2
var log3,log4,log5

function preload(){
  backgroundimg=loadImage("background.png")
  shotimg=loadImage("shoot.png")
  blockimg=loadImage("block.png")
  tntimg=loadImage("tnt.png")
  woodimg=loadImage("wood.png")
  
  

}
function setup(){
  createCanvas(1350,600)
  engine = Engine.create();
  world = engine.world;
  var option={isStatic:true}
  ground=Bodies.rectangle(675,580,1350,20,option)
  World.add(world,ground)
  

  box=Bodies.rectangle(200,470,400,200,option)
  World.add(world,box)

slimshot= new Slimshot()
bird = new Bird(90,190,90,90)
pig = new Pigs(850,40,90,90)
log1 = new Log(650,470,600,80,blockimg)
log2 = new Log(650,440,90,90,woodimg)
//log3 = new Log(950,430,100,100,tntimg)
log4 = new Log(900,440,90,90,woodimg)
log5 = new Log(900,450,90,90,blockimg)



}
function draw(){
  background(backgroundimg)
  Engine.update(engine)
  fill("brown") 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1350,20)
  rect(box.position.x,box.position.y,400,200)
 

slimshot.display()
bird.display()
pig.display()
log1.display()
log2.display()
//log3.display()
log4.display()
log5.display()
//drawSprites()

}