//Create variables here
var hdog,dog,foodS,foodstock,database,d;
function preload()
{
  //load images here
  
  hdog=loadImage("images/dogImg1.png");
  dog=loadImage("images/dogImg.png"); 

 
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodstock=database.ref('food');
  foodstock.on("value",readStock);
  foodstock.set(20);
  
  d=createSprite(250,250,5,5);
  d.addImage(dog);
  d.scale=0.2;
  
}


function draw() {  
background("green");

if(foodS!==undefined){
textSize(20);
fill (255);
text("PRESS UP ARROW TO FEED THE DOG ! ! !",50,50)
text("FOOD REMAINING :"+foodS,150,150);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
d.addImage(hdog);
}
if(keyWentUp(UP_ARROW)){
  d.addImage(dog);
}


}

if(foodS===0){
  foodS=20
}


 drawSprites();
  //add styles here

}

function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1;
}
database.ref("/").update({
food:x
})


}
function readStock(data){
  
foodS=data.val();

}



