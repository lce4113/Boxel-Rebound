var imgGround;
var blockSize = 20;
var scroll, normScroll, scrollVel, scrollStore;
var page = "menu";
var settings = false;
var theme = "yellow";
var levelsWon = new Array(20).fill(false);
var cam;
var level;
var reverb, hype, music;
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
  
  scroll = createVector(0, 0);
  normScroll = createVector(3, 0);
  scrollVel = normScroll;
  scrollStore = scrollVel;
  cam = createVector(0, 0);
  createCanvas(400, 400);
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
  scroll.add(scrollVel);
  
  if (page.slice(0, 5) == "level") {
    cam.x = -scroll.x;
    level.draw();
  } else {
    cam.x = 0;
  }
  
  scene.drawFront();
  
}

function mousePressed() {
  
  if (page.slice(0, 5) == "level") {
    if (mouseCheck(width-scene.menuPadding-scene.settingsSize/2, scene.menuPadding+scene.settingsSize/2, scene.settingsSize, scene.settingsSize)) {
      scene.settings = !scene.settings;
      level.pauseLvl();
    } else if (mouseCheck(scene.menuPadding+scene.homeSize/2, scene.menuPadding+scene.homeSize/2, scene.homeSize, scene.homeSize)) {
      page = "menu";
    } else if (!level.pause) {
      level.player.jump();
    }
  }

  if (page == "menu") {
    if (mouseCheck(400-scene.menuPadding-scene.homeSize/2, scene.menuPadding+scene.homeSize/2, scene.homeSize, scene.homeSize)) {
      scene.settings = !scene.settings;
    }
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        if (mouseCheck(i*60+80, j*60+140, 40, 40)) {
          page = "level" + str(i+j*5+1);
          level = new Level(i+j*5+1);
        }
      }
    }
  }

}

function keyPressed() {
  if (page.slice(0, 5) == "level") {
    if (key == " " || key == "ArrowUp") {
      level.player.jump();
    }
  }
}

function mouseCheck(midX, midY, width, height) {
  return abs(mouseX-midX)<=width/2 && abs(mouseY-midY)<=height/2;
}
