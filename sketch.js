//Create variables here
var dog,happyDog,database,foodS,foodStock;
var fedTime,lastFed;
var changeState,readState;
var bedroom,garden,washroom;
feed = createButton("feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood = createButton("add food");
addFood.position(800,95);
feed.mousePressed(addFoods);
function preload()
{

  //load images here
  dogImg = loadImage('images/dogImg.png');
  happyDog = loadImage('images/dogImg1.png');
  bedroom = loadImage('Bed Room.png');
  washroom = loadImage('Wash Room.png');
  garden = loadImage('Garden.png');
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,30,30);
  dog.scale = 0.2;
  dog.addImage(dogImg);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  readState = database.ref('gameState');
  gameState = data.val();
}


function draw() {  
background(46,139,87);
Food.display()

fedTime = database.ref('feedTime');
fedTime.on("value",function(data){

lastFed = data.val();

});

fill(255,255,244);
textSize(15);
if(lastFed>=12){

text("last feed : " + lastFed%12 + "pm",350,30);
}else if(lastFed == 0){

text("last feed : 12am",350,30);
}else{

text("last feed : " + lastFed + "am",350,30);

}

if(gameState != "Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();
}else{
    feed.show();
    addFood.show();
    dog.addImage(sadDog);
}

currentTime = hour();
if(currentTime == (lastFed + 1)){
update("Playing");
foodObj.garden();
}else if(currentTime == (lastFed + 2)){

  update("Sleeping");
  foodObj.bedroom();
}else if(currentTime>(lastFed + 2) && currentTime<=(lastFed + 4)){
update("Bathing");
foodObj.washroom();
}else{
update("Hungry");
foodObj.display();
}




  drawSprites();

  
  //add styles here
  
  textSize(15);
  text("press the up arrow key to feed the dog milk",250,150);
}


function readStock(){

foodS = data.val();
}


function writeStock(){

  if(x <= 0){
    x = 0;
      }
      else{
    x = x-1;
    
      }


  database.ref('/').update({
Food:x

  })
}


function feedtheDog(){
display()
var x =80,y = 100;
imageMode(CENTER);
image(this.image,720,220,70,70);

if(this.foodStock!= 0){
for(var i = 0;i<this.foodStock;i++){
if(i%10==0){
x = 80;
y = y + 50
}

image(this.image,x,y,50,50)
}
}
}


function feedDog(){
dog.addImage(happyDog);

foodObj.updateFoodStock(foodObj.getFoodStock()-1);
database.ref('/').update({
Food:foodObj.getFoodStock(),
FeedTime:hour()
})

}

function addFoods(){
foodS++;
database.ref('/').update({
Food:foodS

})


}