class Background {

  constructor(x, y) {

    this.x = 0;
    this.y = 0;
    this.pos = createVector(x, y);

    this.settings = false;
    this.lvlFinished = false;

    this.menuPadding = 20;
    
    this.volume = createSlider(0, 0.5, 0, 0);
    this.volume.hide();
    this.speakerSize = 20;
    this.speakerPos = createVector(width/2-75-this.speakerSize*1/2, this.menuPadding+this.homeSize/2);
    this.volume.position(this.speakerPos.x+this.speakerSize*2, this.speakerPos.y-this.speakerSize*1/8);

    this.layer1 = [
      [90, 100], // Start
      [50, 205],
      [30, 150],
      [50, 370],
      [70, 260],
      [150, 100],
      [50, 205],
      [60, 305], //550 px
      [70, 190], //620   
      [140, 120], //760
      [40, 270],
      [90, 100], // Start of new sequence
      [50, 205],
      [30, 150],
      [50, 370],
      [70, 260],
      [150, 100],
      [50, 205],
      [60, 305],
      [70, 190],
      [140, 120],
      [40, 270],
    ];

    this.layer2 = [
      [150, 90], // Start
      [50, 25], // Start
      [30, 130], // Start
      [50, 90], // Start
      [60, 60], // Start
      [150, 90], // Start
      [50, 25], // Start
      [30, 130], // Start
      [50, 100], // 620
      [60, 60], // Start
      [150, 90], // Start
      [50, 25], // Start
      [30, 130], // Start
      [50, 90], // Start
      [60, 60], // Start
      [150, 90], // Start
      [50, 25], // Start
      [30, 130], // Start
      [50, 90], // Start
      [60, 60], // Start
      [150, 90], // Start
      [50, 25], // Start
      [30, 130], // Start
      [50, 90], // 620
      [60, 60], // Start
      [150, 90], // Start
      [50, 25], // Start
      [30, 130], // Start
      [50, 90], // Start
      [60, 60] // Start
    ];

    this.layer1Width = 0;
    this.layer2Width = 0;

    for (let i = 0; i < this.layer1.length; i++) {
      this.layer1Width += this.layer1[i][0];
    }

    for (let i = 0; i < this.layer2.length; i++) {
      this.layer2Width += this.layer2[i][0];
    }

  }

  drawBack() {

    switch (page) {

      case "menu":
        this.menu();
        break;

      case "level1":
        this.scene();
        break;

      case "level2":
        this.scene();
        break;

      case "level3":
        this.scene();
        break;

      case "level4":
        this.scene();
        break;

      case "level5":
        this.scene();
        break;

      case "level6":
        this.scene();
        break;

      case "level7":
        this.scene();
        break;

      case "level8":
        this.scene();
        break;

      case "level9":
        this.scene();
        break;

      case "level10":
        this.scene();
        break;

      case "level11":
        this.scene();
        break;

      case "level12":
        this.scene();
        break;

      case "level13":
        this.scene();
        break;

      case "level14":
        this.scene();
        break;

      case "level15":
        this.scene();
        break;

      case "level16":
        this.scene();
        break;

      case "level17":
        this.scene();
        break;

      case "level18":
        this.scene();
        break;

      case "level19":
        this.scene();
        break;

      case "level20":
        this.scene();
        break;

    }

  }

  drawFront() {

    if (this.settings) {
      this.settingsBar();
    } else {
      this.volume.hide();
    }

    if (this.lvlFinished) {
      this.levelCompleted();
    }

    if (page.slice(0, 5) == "level" || page == "menu") {
      this.buttons();
    }

  }

  scene() {

    push();
    resetMatrix();
    scale(1, -1);
    translate(0, -height);
    // Background depending on color scheme
    switch (theme) {

      case "yellow":
        background(255, 202, 40);
        break;

      case "pink":
        background(255);
        break;

    }

    // layer 1
    switch (theme) {

      case "yellow":
        fill(255, 160, 0);
        break;

      case "pink":
        fill(240, 207, 216);
        break;

    }
    this.pos.y = 200-level.player.pos.y;
    this.pos.x = (this.x - 0.5 * scroll.x) % (this.layer1Width / 2);

    for (let i = 0, xWidth = 0; i < this.layer1.length; i++) {
      rect(this.pos.x + xWidth, this.pos.y-500, this.layer1[i][0], this.layer1[i][1]+500);
      xWidth += this.layer1[i][0];
    }

    // layer 2
    switch (theme) {

      case "yellow":
        fill(255, 111, 0);
        break;

      case "pink":
        fill(236, 172, 191);
        break;

    }
    this.pos.x = (this.x - 0.6 * scroll.x) % (this.layer2Width / 2);

    for (let i = 0, xWidth = 0; i < this.layer2.length; i++) {
      rect(this.pos.x + xWidth, this.pos.y-500, this.layer2[i][0], this.layer2[i][1]+500);
      xWidth += this.layer2[i][0];
    }

    pop();
  
  }

  menu() {

    push();
    resetMatrix();
    scale(1, -1);
    translate(0, -height);
    // Background depending on color scheme
    switch (theme) {

      case "yellow":
        background(255, 202, 40);
        break;

      case "pink":
        background(255);
        break;

    }

    // layer 1
    switch (theme) {

      case "yellow":
        fill(255, 160, 0);
        break;

      case "pink":
        fill(240, 207, 216);
        break;

    }
    this.pos.x = (this.x - 0.5 * scroll.x) % (this.layer1Width / 2);

    for (let i = 0, xWidth = 0; i < this.layer1.length; i++) {
      rect(this.pos.x + xWidth, this.pos.y, this.layer1[i][0], this.layer1[i][1]);
      xWidth += this.layer1[i][0];
    }

    // layer 2
    switch (theme) {

      case "yellow":
        fill(255, 111, 0);
        break;

      case "pink":
        fill(236, 172, 191);
        break;

    }
    this.pos.x = (this.x - 0.6 * scroll.x) % (this.layer2Width / 2);

    for (let i = 0, xWidth = 0; i < this.layer2.length; i++) {
      rect(this.pos.x + xWidth, this.pos.y, this.layer2[i][0], this.layer2[i][1]);
      xWidth += this.layer2[i][0];
    }

    pop();

    push();
    resetMatrix();
    scale(1, -1);
    translate(0, -height);
    // borders
    switch (theme) {

      case "yellow":
        fill(0,0,0,150);
        break;

      case "pink":
        fill(0,0,0,150);
        break;

    }
    rect(0, 0, this.menuPadding, 340-this.menuPadding);
    rect(this.menuPadding, 0, 400-2*this.menuPadding, this.menuPadding);
    rect(400-this.menuPadding, 0, this.menuPadding, 340-this.menuPadding);
    rect(0, 340-this.menuPadding, 400, 60+this.menuPadding);

    pop();
    // levels
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        // levels box colors
        if (levelsWon[i + j * 5]) {
          // completed
          switch (theme) {

            case "yellow":
              fill(255,111,0);
              break;

            case "pink":
              fill(208, 42, 92);
              break;

          }
        } else {
          // incompleted
          switch (theme) {

            case "yellow":
              fill(0);
              break;

            case "pink":
              fill(0);
              break;

          }
        }
        if (abs(mouseX - (i*60+80)) <= 20 && abs(mouseY - (j*60+140)) <= 20) {
          rect(80 + i * 60, 140 + j * 60, 50, 50, 10);
          textSize(35);
        } else {
          rect(80 + i * 60, 140 + j * 60, 40, 40, 10);
          textSize(25);
        }
        fill(255);
        text(str(1 + i + j * 5), 80 + i * 60, 140 + j * 60);
      }
    }
    rectMode(CORNER);

    // Menu title
    switch (theme) {

      case "yellow":
        fill(255);
        break;

      case "pink":
        fill(255);
        break;

    }
    textSize(40);
    text("Main Menu", 200, 30+this.menuPadding/2);

  }

  settingsBar() {
    
    push();
    resetMatrix();
    
    fill(0,0,0,200);
    rect(0, 0, 400, 200);
    
    // Volume Slider + Icon
    fill(255);
    rect(this.speakerPos.x-this.speakerSize, this.speakerPos.y-this.speakerSize*3/10, this.speakerSize*3/5, this.speakerSize*3/5);
    triangle(this.speakerPos.x-this.speakerSize, this.speakerPos.y, this.speakerPos.x, this.speakerPos.y-this.speakerSize*4/5, this.speakerPos.x, this.speakerPos.y+this.speakerSize*4/5);
    noFill();
    stroke(255);
    strokeWeight(this.speakerSize*1/5);
    if (this.volume.value() == 0) {
      line(this.speakerPos.x+this.speakerSize*1/5, this.speakerPos.y+this.speakerSize*1/5, this.speakerPos.x+this.speakerSize*3/5, this.speakerPos.y-this.speakerSize*1/5);
      line(this.speakerPos.x+this.speakerSize*3/5, this.speakerPos.y+this.speakerSize*1/5, this.speakerPos.x+this.speakerSize*1/5, this.speakerPos.y-this.speakerSize*1/5);
    } else {
      for (let i = 1; i <= ceil(this.volume.value()*6); i++) {
        arc(this.speakerPos.x, this.speakerPos.y, this.speakerSize*4/5*i, this.speakerSize*4/5*i, -PI/3, PI/3);
      }
    }

    this.volume.show();
    masterVolume(this.volume.value());
    
    // Sound effects
    rect(10, 10, 10, 10, 5);
    
    pop();

  }

  levelCompleted() {

  }

  buttons() {

    push();
    resetMatrix();
    rectMode(CENTER);

    // Home button
    if (mouseCheck(scene.menuPadding+scene.homeSize/2, scene.menuPadding+scene.homeSize/2, scene.homeSize, scene.homeSize)) {
      this.homeSize = 50;
    } else {
      this.homeSize = 40;
    }

    // Home box color
    switch (theme) {

      case "yellow":
        fill(255,111,0);
        break;

      case "pink":
        fill(208,42,92);
        break;

    }
    rect(this.menuPadding, this.menuPadding, this.homeSize, this.homeSize, 5);
    // Home color
    switch (theme) {

      case "yellow":
        fill(255);
        break;

      case "pink":
        fill(230,230,250);
        break;

    }
    rect(this.menuPadding+this.homeSize/4, this.menuPadding+this.homeSize/2, this.homeSize/2, this.homeSize*3/8);
    triangle(this.menuPadding+this.homeSize/8, this.menuPadding+this.homeSize/2, this.menuPadding+this.homeSize/2, this.menuPadding+this.homeSize/8, this.menuPadding+this.homeSize*7/8, this.menuPadding+this.homeSize/2);
    // Home box color
    switch (theme) {

      case "yellow":
        fill(255,111,0);
        break;

      case "pink":
        fill(208,42,92);
        break;

    }
    rect(this.menuPadding+this.homeSize*5/12, this.menuPadding+this.homeSize*19/32, this.homeSize/6, this.homeSize*9/32);

    // Settings button
    if (mouseCheck(width-scene.menuPadding-scene.settingsSize/2, scene.menuPadding+scene.settingsSize/2, scene.settingsSize, scene.settingsSize)) {
      this.settingsSize = 50;
    } else {
      this.settingsSize = 40;
    }

    // Home box color
    switch (theme) {

      case "yellow":
        fill(255,111,0);
        break;

      case "pink":
        fill(208,42,92);
        break;

    }
    rect(width-20-this.menuPadding, this.menuPadding+20, this.settingsSize, this.settingsSize, 10);
    // Home color
    switch (theme) {

      case "yellow":
        fill(255);
        break;

      case "pink":
        fill(230,230,250);
        break;

    }
    circle(400-this.menuPadding-20, this.menuPadding+20, this.settingsSize*11/16);
    // Home box color
    switch (theme) {

      case "yellow":
        fill(255,111,0);
        break;

      case "pink":
        fill(208,42,92);
        break;

    }
    circle(width-this.menuPadding-20, this.menuPadding+20, this.settingsSize*7/16);
    // Home color
    switch (theme) {

      case "yellow":
        fill(255);
        break;

      case "pink":
        fill(230,230,250);
        break;

    }
    translate(width-this.menuPadding-20, this.menuPadding+20);
    for (let i = 0; i < 8; i++) {
      rotate(TAU/8);
      square(0, this.settingsSize*3/8, this.settingsSize*5/32, 2);
    }
    rectMode(CORNER);
    pop();

  }


}