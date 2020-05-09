class Player {
  
  constructor(x, y) {
    
    this.pPos = createVector(x, y);
    this.pos = createVector(x, y);
    this.size = blockSize;
    
    this.vel = createVector(scrollSpeed, 0);
    this.grav = createVector(0, 0.6);
    this.jumpCount = 0;
    this.spin = false;
    this.rotate = 0;
    
    this.behind = false;
    this.status = "playing";
    
  }

  draw() {
    
    switch (theme) {
        
      case "yellow":
        fill(0);
        break;
        
      case "pink":
        fill(208, 42, 92);
        break;
        
    }
    push();
    rectMode(CENTER);
    translate(this.pos.x + this.size/2, this.pos.y + this.size/2);
    rotate(this.rotate);
    rect(0, 0, this.size, this.size);
    pop();
    
  }

  jump() {
    if (this.jumpCount < 1) {
      this.vel = createVector(scrollSpeed, 10);
      this.jumpCount++;
      this.spin = true;
    }
  }

  update() {
    
    if (this.status == "dead") {
      level = new Level(level.levelNum);
    }
    
    this.pPos = this.pos.copy();

    this.vel.sub(this.grav);
    this.pos.add(this.vel);
    
    if (this.pos.x < scroll || this.pos.y < 0) {
      this.status = "dead";
    }
    
    if (this.pos.x < scroll + 100) {
      scrollSpeed = slowScroll;
      if (!this.behind) {
        this.pos.x += 1;
      }
    } else {
      scrollSpeed = normScroll;
    }
    
    if (this.spin) {
      this.rotate -= PI/16;
    } else {
      this.rotate = 0;
    }
    
    this.spin = true;
    
    for (let i = 0; i < level.obstacles.length; i++) {
      
      let currObj = level.obstacles[i];
      
      if (this.pos.x < currObj.pos.x + blockSize && this.pos.x > currObj.pos.x - blockSize && this.pos.y < currObj.pos.y + blockSize && this.pos.y > currObj.pos.y - blockSize) {
        
        switch (currObj.constructor.name) {
          
          case "Wall":
            
            this.behind = false;

            if (this.pPos.y - currObj.pos.y > abs(this.pPos.x - currObj.pos.x) && this.pPos.y > currObj.pos.y && this.pPos.x + this.size > currObj.pos.x && this.pPos.x < currObj.pos.x + blockSize) {
              
              this.pos.y = currObj.pos.y + blockSize;
              this.vel.y = 0;
              this.jumpCount = 0;
              this.spin = false;

            } else if (currObj.pos.y - this.pPos.y > abs(this.pPos.x - currObj.pos.x) && currObj.pos.y > this.pPos.y && this.pPos.x + this.size > currObj.pos.x && this.pPos.x < currObj.pos.x + blockSize) {

              this.pos.y = currObj.pos.y - blockSize;
              this.vel.y = 0;
              this.spin = false;

            } else if (currObj.pos.x - this.pPos.x > abs(this.pPos.y - currObj.pos.y) && currObj.pos.x > this.pPos.x) {
              
              this.pos.x = currObj.pos.x - blockSize;
              this.behind = true;
              this.spin = false;
              
            }
            break;
            
          case "FinishLine":
            
            page = "menu";
            levelsWon[level.levelNum-1] = true;
            break;
            
          case "Spike":
            
            this.status = "dead";
            break;
          
        }
        
      }
      
    }
  
  }
    
}