var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}

function clues(){
  fill("white")
  textSize(15)
  text(" R E V B A I L A", 100, 50)
  fill("lightblue")
  text("Hint: Always changing, not constant !!", 100, 70)
}
display(){
  this.button1. mousePressed(()=>{
    if(system.authenticate(accessCode1,this.access1.value())){
      this.button1.hide();
      this.access1.hide();
      score++;
    }
  });
  this.button2. mousePressed(()=>{
    if(system.authenticate(accessCode2,this.access2.value())){
      this.button2.hide();
      this.access2.hide();
      score++;
    }
  });
 
}