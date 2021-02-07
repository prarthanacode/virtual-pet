//Create variables here
var dog,happydog;
var database;
var foodstock,foodS;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png")
  happydog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog1 = createSprite(250,250);
  dog1.addImage("sadDog",dog);
  
  dog1.scale = 0.2;
  database = firebase.database;
}


function draw() {  
  background(0);

  foodstockRef = database.ref("Food")
  foodstockRef.on("value",readStock)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog1.addImage("happyDog",happydog);
  }

  drawSprites();
  //add styles here

}
function readStock(data){
foodS = data.val();

}
function writeStock(x){
  database.ref("/").update({
    Food:x
  })
}

