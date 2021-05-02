//Create variables here
var database,dogImg,happydogImg,dog
var foodStock=0
function preload()
{
	//load images here
dogImg=loadImage("images/Dog.png")
happydogImg=loadImage("images/happydog.png")
}

function setup() {
	createCanvas(800, 700);
database=firebase.database()
dog=createSprite(500,500,10,10)
dog.addImage(dogImg)
dog.scale=0.2
database.ref('food').on("value",readStock)
  
}


function draw() { 
  background("green") 

  if(keyWentDown('up')){
    writeStock(foodStock)
    dog.addImage(happydogImg)

  }
  drawSprites();
  fill ("white")
  textSize (15)
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,50);
  stroke("white")
  fill ("white")
  textSize (30)
  text ("food remaining :"+foodStock,300,300)
  //add styles here

}
function readStock(data){
  if(data!==undefined){
  foodStock=data.val()
}
}

function writeStock(x){
  if(x!==undefined){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })}
}

