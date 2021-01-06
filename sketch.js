//Create variables here
var dog, dI,hDI , happyDog, database, foodS, foodStocks
function preload()
{
 dI = loadImage("images/dogImg.png") 
 hDI = loadImage("images/dogImg1.png") 
  //load images here
}

function setup() 
{
	createCanvas(500,500);
  database = firebase.database();
  console.log(database)

  createCanvas(500,500);

  dog = createSprite(250,250,20,20);
  dog.addImage(dI) 
  dog.scale = 0.4;

  var foodNo = database.ref('food');
  foodNo.on("value", readStock);

  
}


function draw()
{  
  background(46,139,87)
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(hDI);
  } 
  drawSprites();
    //add styles here
    stroke("red")
    fill("white")
    textSize(15)
    text("UP ARROW TO FEED MILK",170,50)
    text("STOCK = " + foodS,170,100);
    //console.log(foodS)
}


function writeStock(x)
{
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    food:x
  })
}

function readStock(data){
  foodS=data.val();
}

