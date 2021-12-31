var computerPaddle; 
var playerPaddle; 
var ball;
var score; 

function setup() {

    createCanvas(400,400);
    computerPaddle = createSprite(10,160,10,70); 
    playerPaddle = createSprite(390,160,10,70); 
    ball = createSprite(200,160,10,10);
    score =  0; 
    createEdgeSprites();

}

function mousePressed () {
    ball.velocityX = 6;
    ball.velocityY = 6; 
}

function ballbounce () {
    if (ball.bounceOff(playerPaddle)) {
       score = score + 5; 
     }
}


function draw () {
    
      background("black");
      textSize(15); 
      text("Score: " + score, 40, 30);
      playerPaddle.y = mouseY;
      computerPaddle.y = ball.y; 
      drawSprites();
      
      if (ball.x > 400 || ball.x < 0)  {
        ball.x = ball.x * -1; 
      }

      if (ball.y > 400 || ball.y < 0) {
        ball.y  = ball.y * -1;
      }
     
      
      if (ball.y > 400) {
        ball.velocityX = 0; 
        ball.velocityY = 0; 
        textSize(35);
        text('You lost!',130,200); 
      }
      
       if (ball.y < 0) {
        ball.velocityX = 0; 
        ball.velocityY = 0; 
        textSize(35);
        text('You lost!',130,200); 
      }

      mousePressed();
      ballbounce();
      drawSprites(); 

      
}

