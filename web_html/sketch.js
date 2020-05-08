let imgGround;
let blockSize = 20;
let scroll = 0;
let scrollSpeed = 3;
let page = "menu";
let theme = "yellow";
let levelsWon = new Array(20).fill(false);
let level;

function preload() {
  imgGround = loadImage("https://www.kasandbox.org/third_party/javascript-khansrc/live-editor/build/images/cute/GrassBlock.png");
}

function setup() {
  
  createCanvas(400, 400);
  scene = new Background();
  
}

function draw() {

  translate(0, height);  //moves the origin to bottom left
  scale(1, -1);  //flips the y values so y increases "up"
  
  noStroke();
  
  scene.draw();
  scroll += scrollSpeed;
  
  if (page.slice(0, 5) == "level") {
    level.draw();
    level.player.update();
  }
  
}

function mousePressed() {
  if (page == "menu") {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        if (abs(mouseX - (i*60+80)) <= 20 && abs(mouseY - (j*60+140)) <= 20) {
          scroll = 0;
          page = "level" + str(i+j*5+1);
          level = new Level(i+j*5+1);
        }
      }
    }
  }
}

function keyPressed() {
  if (key == " " || key == "ArrowUp") {
    level.player.jump();
  }
}
