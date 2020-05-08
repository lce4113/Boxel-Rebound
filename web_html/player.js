class Player {
  
  constructor(x, y) {
    
    this.pPos = createVector(x, y);
    this.pos = createVector(x, y);
    this.size = blockSize;
    
    this.vel = createVector(0, 0);
    this.grav = createVector(0, 0.6);
    this.jumpCount = 0;
    this.jumping = false;
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
    if (this.jumping) {
      this.rotate -= PI/16;
    } else {
      this.rotate = 0;
    }
    rect(0, 0, this.size, this.size);
    pop();
    
  }

  jump() {
    if (this.jumpCount < 1) {
      this.vel = createVector(0, 10);
      this.jumpCount++;
      this.jumping = true;
    }
  }

  update() {
    
    this.pPos = this.pos.copy();

    this.vel.sub(this.grav);
    this.pos.add(this.vel);
    
    if (this.pos.x < 100 && !this.behind) {
      this.pos.x += 1;
    }
    
    for (let i = 0; i < level.obstacles.length; i++) {
      
      let currObj = level.obstacles[i];
      
      if (this.pos.x < currObj.pos.x + blockSize && this.pos.x > currObj.pos.x - blockSize && this.pos.y < currObj.pos.y + blockSize && this.pos.y > currObj.pos.y - blockSize) {
        
        switch (currObj.constructor.name) {
          
          case "Wall":
            
            this.behind = false;

            if (this.pPos.y - currObj.pos.y > abs(this.pPos.x - currObj.pos.x) && this.pPos.y > currObj.pos.y) {
              
              this.pos.y = currObj.pos.y + blockSize;
              this.vel.y = 0;
              this.jumpCount = 0;
              this.jumping = false;

            } else if (currObj.pos.y - this.pPos.y > abs(this.pPos.x - currObj.pos.x) && currObj.pos.y > this.pPos.y) {

              this.pos.y = currObj.pos.y - blockSize;
              this.vel.y = 0;

            } else if (currObj.pos.x - this.pPos.x > abs(this.pPos.y - currObj.pos.y) && currObj.pos.x > this.pPos.x) {
              
              this.pos.x = currObj.pos.x - blockSize;
              this.behind = true;
              
            }
            break;
            
          case "FinishLine":
            
            page = "menu";
            levelsWon[level.levelNum-1] = true;
            break;
            
          case "Spike":
            
            page = "menu";
            break;
          
        }
        
      }
      
    }
  
  }
    
}
