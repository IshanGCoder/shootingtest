var wall, thickness;
var bullet, speed, weight, deformation;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(400,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  bullet.velocityX = speed;
  bullet.collide(wall);
  deformation = 0
}

function draw() {
  background(255,255,255);
  if (wall.x - bullet.x < (bullet.width+wall.width)/2) {
      deformation = 0.5*weight*speed*speed/thickness*thickness*thickness
      bullet.velocityX = 0
  if (deformation <= 10) {
   wall.shapeColor = color(0,250,0); 
  } 
  if (deformation>10) {
   wall.shapeColor = color(250,0,0) 
  }
  }
    drawSprites();
}