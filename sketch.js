var player;
var score=0;
var BunnyGroup;
var SnakeGroup;
var died=0;
function preload()
{
  SnakeImage=loadImage("images/snake.png");
  bgImage=loadImage("Images/bg.png");
  playerImage=loadImage("images/carrot.png");
  BunnyImage=loadImage("images/bunnyImg.png");
}

function setup() {
createCanvas(600,600); 
bg=createSprite(300,300,600,600);
bg.scale=2.5;
bg.addImage(bgImage);

player = createSprite(40,550,30,30); 
player.scale=0.2;
player.addImage(playerImage);
player.shapeColor="red";

BunnyGroup= new Group();
SnakeGroup= new Group();

}

function draw() {
background("black");
stroke("blue");
if(player!=null){
player.x=mouseX;
player.y=mouseY;
}

if(died==0){
generateBunnys();
generateSnakes();
}
 for(var i = 0 ; i< (BunnyGroup).length ;i++){
  var temp = (BunnyGroup).get(i) ;
  if (player!=null && player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  
for(var a = 0; a<(SnakeGroup).length;a++){
  var temptwo = (SnakeGroup).get(a);
  if (player!=null && player.isTouching(temptwo)){
    died=1;
    
    player.destroy();
    player=null;
    
  }
}


  
  drawSprites();

  
  if(died==1)
  {
    textSize(20);
    text("YOU ARE BITTEN BY SNAKE...",150,300);
    
  }

  textSize(20);
  text("Bunnys destroyed: "+score,350,500);
}

function generateBunnys(){
  if(frameCount % 30===0){
    console.log("Hi");
    var Bunny= createSprite(100,350,40,40);
    Bunny.scale=random(0.1,0.3);
    Bunny.addImage(BunnyImage);
    Bunny.velocityX=random(-4,4);
    Bunny.velocityY=random(-4,4);
    BunnyGroup.add(Bunny);
    }
  
  }
  function generateSnakes(){
    if(frameCount % 30===0){
      var Snake= createSprite(200,350,40,40);
      Snake.scale=random(0.1,0.3);
      Snake.addImage(SnakeImage);
      Snake.velocityX=random(-4,4);
      Snake.velocityY=random(-4,4);
      SnakeGroup.add(Snake);
      }
    
    }
   