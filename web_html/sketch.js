var imgGround;
var blockSize = 20;
var scroll = 0;
var slowScroll = 3;
var normScroll = 3;
var scrollSpeed = normScroll;
var scrollStore = scrollSpeed;
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
  switch (music) {
    case reverb:
      music.loop(0, 1, 1, 3.1, 11.1);
    case hype:
      music.loop(0, 1, 1, 0, 13.68);
  }
  masterVolume(0);

}

function draw() {

  noStroke();
  
  translate(cam);
  
  scene.drawBack();
  scroll += scrollSpeed;
  
  if (page.slice(0, 5) == "level") {
    cam.x = -scroll;
    level.draw();
  } else {
    cam.x = 0;
  }
  
  scene.drawFront();
  
}

function mousePressed() {
  
  if (page.slice(0, 5) == "level") {
    if (mouseX >= 400-scene.menuPadding-scene.homeSize && mouseX <= 400-scene.menuPadding && mouseY >= scene.menuPadding && mouseY <= scene.menuPadding+scene.homeSize) {
      scene.settings = !scene.settings;
      level.pauseLvl();
    } else if (mouseX >= scene.menuPadding && mouseX <= scene.menuPadding+scene.homeSize && mouseY >= scene.menuPadding && mouseY <= scene.menuPadding+scene.homeSize) {
      page = "menu";
    } else if (!level.pause) {
      level.player.jump();
    }
  }

  if (page == "menu") {
    if (mouseX >= 400-scene.menuPadding-scene.homeSize && mouseX <= 400-scene.menuPadding && mouseY >= scene.menuPadding && mouseY <= scene.menuPadding+scene.homeSize) {
      scene.settings = !scene.settings;
    }
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
