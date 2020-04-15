



function setup(){

  createCanvas(1200,900);
  //the centre piece
  createSprite(600,495,115,200);
  //the L1 piece
  createSprite(470,445,130,300);
 //the R1 piece
 createSprite(730,445,130,300);
 //the L2 piece
 createSprite(320,352,150,485);
 //the R2 piece
 createSprite(880,352,150,485);
 //the L3 piece
 createSprite(150,394,165,400);
 //the R3 piece
 createSprite(1050,394,165,400);

 //the above/top pieces
 //the centre piece(rectangle)
 createSprite(600,205,380,40);
 //the centre(left)
 createSprite(470,260,65,65);
 //the centre(right)
 createSprite(730,260,65,65);
 //the L1 piece(left)
 createSprite(275,75,60,60);
 //the L1 piece(right)
 createSprite(365,75,60,60);
 //the R1 piece(left)
 createSprite(835,75,60,60);
 //the R1 piece(right)
 createSprite(925,75,60,60);
 //the L2 piece(left)
 createSprite(103,155,70,70);
 //the L2 piece(right)
 createSprite(197,155,70,70);
 //the R2 piece(left)
 createSprite(1003,155,70,70);
 //the R2 piece(right)
 createSprite(1098,155,70,70);
 //the topmost centre piece (left)
 createSprite(472,120,120,120);
 //the topmost centre piece(right)
 createSprite(728,120,120,120);
 //the topmost centre piece(centre)
 createSprite(600,160,100,40);
 //the flag pole
 createSprite(560,70,20,130);
 //the actual flag
 createSprite(620,35,90,60);
}


function draw(){
background(0);
drawSprites();
}