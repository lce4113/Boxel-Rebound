class Background {
 
  constructor(x, y) {
    this.x = 0;
    this.y = 0;
    this.pos = createVector(x, y);
     
    // this is the farthest layer
    this.layer1 = [[90, 100],
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
    [90, 100],   
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

    // this is the closest layer
    this.layer2 = [[150, 100],    
    [50, 25],     
    [30, 130],    
    [50, 100],    
    [60, 60],     
    [150, 100],   
    [50, 25],     
    [30, 130],    
    [50, 100],    
    [60, 60],     
    [150, 100],   
    [50, 25],     
    [30, 130],    
    [50, 100],    
    [60, 60],    
    [150, 100],   
    [50, 25],     
    [30, 130],    
    [50, 100],    
    [60, 60],     
    [150, 100],   
    [50, 25],     
    [30, 130],    
    [50, 100],    
    [60, 60],    
    [150, 100],   
    [50, 25],     
    [30, 130],    
    [50, 100],   
    [60, 60]     
    ]
    
    this.layer1Width = 0;
    this.layer2Width = 0;
    
    for (let i = 0; i < this.layer1.length; i++) {
      this.layer1Width += this.layer1[i][0];
    }
    
    for (let i = 0; i < this.layer2.length; i++) {
      this.layer2Width += this.layer2[i][0];
    }
    
  }
 
  draw() {
    
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
 
    }
    
  }
 
  scene1() {
    
    // Background depending on color scheme
    switch (theme) {
        
      case "yellow":
        background(255,202,40);
        break;
        
      case "pink":
        background(255);
        break;
        
    }
    
    // layer 1
    switch (theme) {
        
      case "yellow":
        fill(255,160,0);
        break;
        
      case "pink":
        fill(240,207,216);
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
        fill(255,111,0);
        break;
        
      case "pink":
        fill(236,172,191);
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
        background(255,202,40);
        break;
        
      case "pink":
        background(255);
        break;
        
    }
    
    // layer 1
    switch (theme) {
        
      case "yellow":
        fill(255,160,0);
        break;
        
      case "pink":
        fill(240,207,216);
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
        fill(255,111,0);
        break;
        
      case "pink":
        fill(236,172,191);
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
        background(255,202,40);
        break;
        
      case "pink":
        background(255);
        break;
        
    }
    
// Background depending on color scheme
    switch (theme) {
        
      case "yellow":
        background(255,202,40);
        break;
        
      case "pink":
        background(255);
        break;
        
    }
    
    // layer 1
    switch (theme) {
        
      case "yellow":
        fill(255,160,0);
        break;
        
      case "pink":
        fill(240,207,216);
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
        fill(255,111,0);
        break;
        
      case "pink":
        fill(236,172,191);
        break;
        
    }
    this.pos.x = (this.x - 0.6 * scroll) % (this.layer2Width / 2);
 
    for (let i = 0, xWidth = 0; i < this.layer2.length; i++) {
      rect(this.pos.x + xWidth, this.pos.y, this.layer2[i][0], this.layer2[i][1]);
      xWidth += this.layer2[i][0];
    }  
    
    // border
    switch (theme) {

      case "yellow":
        fill(0);
        break;

      case "pink":
        fill(129,29,111);
        break;

    }  
    // borders
    rect(0, 0, 40, 400);
    rect(0, 0, 400, 40);
    rect(360, 0, 40, 400);
    rect(0, 300, 400, 100);
    
    push();
    textAlign(CENTER, CENTER);
    scale(1, -1);
    translate(0, -height);
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        if (levelsWon[i+j*5]) {
          switch (theme) {
            
            case "yellow":
              fill(243,26,29);
              break;
              
            case "pink":
              fill(217,59,105);
              break;
            
          }
        } else {
          fill(0);
        }
        rect(60+i*60, 120+j*60, 40, 40, 10);
        fill(255);
        textSize(25);
        text(str(1+i+j*5), 80+i*60, 140+j*60);
      }
    }
    pop();
    
  }
 
}

