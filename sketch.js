var bullet
var wall
var speed, weight
var damage

function setup() {

  weight = random(30,50)
  speed = random(20,50)
  thickness = random(10,20)
  createCanvas(1500,800);
  bullet = createSprite(100, 350, 100, 50);
  bullet.shapeColor = "blue"
  bullet.velocityX = speed
  
  wall = createSprite(1400,400,100,1000)
  wall.shapeColor = color(100,100,200)

}

function draw() {
  background(255,255,255);  

  text("speed:" + round(speed),20,10)
    text("weight:"+round(weight), 20,30)
    
    
    if(isTouching(bullet,wall)){
      
      
      
      }
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
      text("damage:" + round(damage),20,50)
    
if(damage < 5){
  wall.shapeColor = "green"
}
    
if(damage => 5){
  wall.shapeColor = "red"
}   
  
  drawSprites();
}
