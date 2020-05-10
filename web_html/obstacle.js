class Wall {

  constructor(x, y) {
    
    this.size = blockSize;
    this.pos = createVector(x, y);
    
  }

  draw() {
    
    switch (theme) {
        
      case "yellow":
        fill(0);
        break;
        
      case "pink":
        fill(129,29,111);
        break;
        
    }
    rect(this.pos.x, this.pos.y, this.size, this.size);
    
  }

}

class FinishLine {
  
  constructor(x, y) {
    
    this.size = blockSize;
    this.pos = createVector(x, y);
    
  }

  draw() {
    
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if ((i+j)%2 == 0) {
          fill(0);
        } else {
          fill(255);
        }
        rect(this.pos.x+i*this.size/6, this.pos.y+j*this.size/6, this.size/6, this.size/6);
      }
    }
    
  }
  
}

class Spike {
  
  constructor(x, y) {
    
    this.size = blockSize;
    this.pos = createVector(x, y);
    
  }

  draw() {
    
    switch (theme) {
        
      case "yellow":
        fill(0);
        break;
        
      case "pink":
        fill(129,29,111);
        break;
        
    }
    triangle(this.pos.x, this.pos.y, this.pos.x + this.size/4, this.pos.y + this.size, this.pos.x + this.size/2, this.pos.y);
    triangle(this.pos.x + this.size/2, this.pos.y, this.pos.x + this.size*3/4, this.pos.y + this.size, this.pos.x + this.size, this.pos.y);
    
  }
  
}

class Trampoline {
  
  constructor(x, y) {
    
    this.size = blockSize;
    this.pos = createVector(x, y);
    
  }

  draw() {
    
    switch (theme) {
        
      case "yellow":
        fill(0);
        break;
        
      case "pink":
        fill(129,29,111);
        break;
        
    }
    rect(this.pos.x, this.pos.y, this.size, this.size/2);
    square(this.pos.x+this.size*3/8, this.pos.y+this.size/2, this.size/4);
    rect(this.pos.x, this.pos.y+this.size*3/4, this.size, this.size/4);
    
  }
  
}