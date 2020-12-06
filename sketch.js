var speed, weight;
var bullet,wall, thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);

 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = "white";

 thickness = random(22,83);

 bullet = createSprite(200,200,50,50);
 bullet.velocityX = speed;
 bullet.shapeColor = "white";

 
}

function draw() { 
  background(0); 

  if(0.5*bulletweight*bulletspeed8bulletspeed/(thicknessofwall*thicknessofwall*thicknessofwall));
 
   function hascollided();
  drawSprites();
}


function hascollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.weight;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge);
  {
    return true;

  }
  return false;

}

if (hascollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5* weight*speed*speed/(thickness*thickness*thickness);

  
  if (damage>10)
  { 
     wall.shapeColor = color(255,0,0);
  }

  if (damage<10)
  {
     wall.shapeColor = color(0,255,0);
    
  }

}




