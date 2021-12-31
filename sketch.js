var box; 

function setup() {
  createCanvas(800,800);
  box = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  drawSprites(); 

  if (keyDown("left")) {
    box.x -= 1; 
  }

  if (keyDown("right")) {
    box.x +=1; 
  }

  if (keyDown("up")) {
    box.y -=1; 
  }

  if (keyDown("down")) {
    box.y +=1; 
  }

}




