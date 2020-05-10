class Background {

  constructor(x, y) {

    this.x = 0;
    this.y = 0;
    this.pos = createVector(x, y);

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
      [150, 100], // Start
      [50, 25], // Start
      [30, 130], // Start
      [50, 100], // Start
      [60, 60], // Start
      [150, 100], // Start
      [50, 25], // Start
      [30, 130], // Start
      [50, 100], // 620
      [60, 60], // Start
      [150, 100], // Start
      [50, 25], // Start
      [30, 130], // Start
      [50, 100], // Start
      [60, 60], // Start
      [150, 100], // Start
      [50, 25], // Start
      [30, 130], // Start
      [50, 100], // Start
      [60, 60], // Start
      [150, 100], // Start
      [50, 25], // Start
      [30, 130], // Start
      [50, 100], // 620
      [60, 60], // Start
      [150, 100], // Start
      [50, 25], // Start
      [30, 130], // Start
      [50, 100], // Start
      [60, 60] // Start
    ]

    this.menuPadding = 20;
    this.homeSize = 40;

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
        this.scene1();
        break;

      case "level2":
        this.scene2();
        break;

      case "level20":
        this.scene20();
        break;

    }

  }
  
  drawFront() {
    
    if (settings) {
      this.settings();
    }
    
    this.buttons();

  }

  scene1() {

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
    this.pos.x = (this.x - 0.5 * scroll) % (this.layer1Width / 2);

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
    this.pos.x = (this.x - 0.6 * scroll) % (this.layer2Width / 2);

    for (let i = 0, xWidth = 0; i < this.layer2.length; i++) {
      rect(this.pos.x + xWidth, this.pos.y, this.layer2[i][0], this.layer2[i][1]);
      xWidth += this.layer2[i][0];
    }

  }

  scene2() {

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
    this.pos.x = (this.x - 0.5 * scroll) % (this.layer1Width / 2);

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
    this.pos.x = (this.x - 0.6 * scroll) % (this.layer2Width / 2);

    for (let i = 0, xWidth = 0; i < this.layer2.length; i++) {
      rect(this.pos.x + xWidth, this.pos.y, this.layer2[i][0], this.layer2[i][1]);
      xWidth += this.layer2[i][0];
    }

  }

  scene20() {

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
    this.pos.x = (this.x - 0.5 * scroll) % (this.layer1Width / 2);

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
    this.pos.x = (this.x - 0.6 * scroll) % (this.layer2Width / 2);

    for (let i = 0, xWidth = 0; i < this.layer2.length; i++) {
      rect(this.pos.x + xWidth, this.pos.y, this.layer2[i][0], this.layer2[i][1]);
      xWidth += this.layer2[i][0];
    }

  }

  menu() {

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
    this.pos.x = (this.x - 0.5 * scroll) % (this.layer1Width / 2);

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
    this.pos.x = (this.x - 0.6 * scroll) % (this.layer2Width / 2);

    for (let i = 0, xWidth = 0; i < this.layer2.length; i++) {
      rect(this.pos.x + xWidth, this.pos.y, this.layer2[i][0], this.layer2[i][1]);
      xWidth += this.layer2[i][0];
    }

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

    // levels
    pop();
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
        rect(60 + i * 60, 120 + j * 60, 40, 40, 10);
        fill(255);
        textSize(25);
        text(str(1 + i + j * 5), 80 + i * 60, 140 + j * 60);
      }
    }
    
    // Menu title
    // Title color
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

  settings() {
    
    fill(0,0,0,200);
    rect(0, 200, 400, 200);

  }

  buttons() {
    
    push();
    scale(1, -1);
    translate(0, -height);
    
    // Home button
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
    // Home box color
    switch (theme) {

      case "yellow":
        fill(255,111,0);
        break;

      case "pink":
        fill(208,42,92);
        break;

    }
    rect(400-this.homeSize-this.menuPadding, this.menuPadding, this.homeSize, this.homeSize, 10);
    // Home color
    switch (theme) {

      case "yellow":
        fill(255);
        break;

      case "pink":
        fill(230,230,250);
        break;

    }
    circle(400-this.menuPadding-this.homeSize/2, this.menuPadding+this.homeSize/2, this.homeSize*11/16);
    // Home box color
    switch (theme) {

      case "yellow":
        fill(255,111,0);
        break;

      case "pink":
        fill(208,42,92);
        break;

    }
    circle(400-this.menuPadding-this.homeSize/2, this.menuPadding+this.homeSize/2, this.homeSize*7/16);
    // Home color
    switch (theme) {

      case "yellow":
        fill(255);
        break;

      case "pink":
        fill(230,230,250);
        break;

    }
    rectMode(CENTER);
    translate(400-this.menuPadding-this.homeSize/2, this.menuPadding+this.homeSize/2);
    for (let i = 0; i < 8; i++) {
      rotate(TAU/8);
      square(0, this.homeSize*3/8, this.homeSize*5/32, 2);
    }
    pop();
    
  }
  
}