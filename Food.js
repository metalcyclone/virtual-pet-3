milk = loadImage("milk(2).png")
class Food{
constructor(){
 this.foodStock,this.lastFed;
 this.getFoodStock,this.updateFoodStock,this.deductFood,this.foodObject;
}

bedroom(){
    background(bedroom,550,550);
}

washroom(){
    background(washroom,550,550);
}

garden(){
    background(garden,550,550);
}


display(){
    var x =80,y = 100;
    imageMode(CENTER);
    image(this.image,720,220,70,70);
    
    if(this.foodStock!= 0){
    for(var i = 0;i<this.foodStock;i++){
    if(i%10==0){
    x = 80;
    y = y + 50
    }
}
    
    image(this.image,x,y,50,50)
}
}
}