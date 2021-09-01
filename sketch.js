const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player;
var computerPlayer;
var computerBase;
var playerBase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase=new ComputerBase(width-300,random(450,height-300),180,150);
   computerPlayer=new ComputerPlayer(width-285,computerBase.body.position.y-153,50,180);
   
   playerBase=new PlayerBase(300,random(450,height-300),180,150);
   player=new Player(285,playerBase.body.position.y-153,50,180);

   

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  computerBase.display()
  computerPlayer.display()
  playerBase.display()
  player.display()
   //Display Playerbase and computer base 
  
   //display Player and computerplayer
   

}
