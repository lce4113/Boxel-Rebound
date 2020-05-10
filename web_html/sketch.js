var imgGround;
var blockSize = 20;
var scroll = 0;
var slowScroll = 3;
var normScroll = 3;
var scrollSpeed = normScroll;
var page = "menu";
var settings = false;
var theme = "yellow";
var levelsWon = new Array(20).fill(false);
var cam;
var level;
var reverb, hype;
var music;
var timer;
var counter = 0;
var seconds, minutes;

function preload() {
  
  // Music
  reverb = loadSound("reverb.mp3");
  hype = loadSound("hype.m4a");
  music = hype;
  
}

function setup() {
  
  createCanvas(400, 400);
  cam = createVector(0, 0);
  scene = new Background(0, 0);
  //music.loop(0, 1, 1, 3.1, 11.1); // reverb
  music.loop(0, 1, 1, 0, 13.68); // hype
  masterVolume(0.1);
  setInterval(scene.scene, 1000);
}

function draw() {

  noStroke();
  
  translate(cam);
  
  scene.drawBack();
  scroll += scrollSpeed;
  
  if (page.slice(0, 5) == "level") {
    cam.x = -scroll;
    level.draw();
    level.player.update();
  } else {
    cam.x = 0;
  }
  
  scene.drawFront();
  
}

function mousePressed() {
    
  if (mouseX >= scene.menuPadding && mouseX <= scene.menuPadding+scene.homeSize && mouseY >= scene.menuPadding && mouseY <= scene.menuPadding+scene.homeSize) {
    page = "menu";
  } else if (mouseX >= 400-scene.menuPadding-scene.homeSize && mouseX <= 400-scene.menuPadding && mouseY >= scene.menuPadding && mouseY <= scene.menuPadding+scene.homeSize) {
    settings = !settings;
  }
  
  if (page.slice(0, 5) == "level") {
    
    level.player.jump();
    
  } else if (page == "menu") {
    
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        if (abs(mouseX - (i*60+80)) <= 20 && abs(mouseY - (j*60+140)) <= 20) {
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
