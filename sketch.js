//Create variables here
var dog,dogimg,happydog,database,foodS,foodStock;
function preload()
{
  happydog = loadImage("images/dogImg1.png");
  dogimg = loadImage("images/Dog.png");
	//load images here
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.1 ;
  foodStock = database.ref("food ");
  foodStock.on("value",readstock) ;


  
  
  
  
}


function draw() {
  background(46, 139, 87) ;  

  drawSprites();
  //add styles here


  if(keyWentDown( UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog);
  }

}

function readstock(data){
  foodS=data.val();
}



function writeStock(x){

  if(x<=0){
    x = 0 ;
  }else{
    x-x - 1 ;
  }

  database.ref('/').update({
    food:x
  })

}



