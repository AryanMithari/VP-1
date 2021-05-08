var  dog, happyDog, database, foodS, foodStock;
function preload()
{
	
  dog1=loadImage("dogImg.png")
  happyDog= loadImage("happydog.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  dog=createSprite(250,200,10,10);
  dog.addImage(dog1)
  dog.scale=0.2

  foodStock= database.ref('Food').on("value",readStock)
}


function draw() {  
background(46, 139, 87)
  drawSprites();
 
if(keyWentDown("up")){
  writeStock(foodS)
dog.addImage(happyDog)
}
textSize(25)
  fill("orange")
  textFont("copperplate gothic")
  text("Food left! : "+foodS,50,50)
  textFont("cambria")
  text("Press UP arrow to feed Drago milk!🥛",50,400)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0
}else{
  x=x-1
}
database.ref('/').update({
  Food:x
})
}