var fixedrec,movingrec;
var longrec,shortrec;
var square1,square2;

function setup() {
  createCanvas(1000,600);

  //creating sprite
  fixedrec=createSprite(100, 600, 200, 100);
  fixedrec.shapeColor="red";
  fixedrec.velocityX=5;
  
  //creating sprite
  movingrec=createSprite(900,600,200,100);
  movingrec.shapeColor="red";
  movingrec.velocityX=-5

  //creating recs
  longrec=createSprite(100,100,100,200);
  shortrec=createSprite(500,600,100,100);
  longrec.shapeColor="red";
  shortrec.shapeColor="red";
  longrec.velocityY=5;
  shortrec.velocityY=-5;
}

function draw() {
  background(0);
bounceOff(longrec,shortrec);
bounceOff(fixedrec,movingrec);




  drawSprites();
}