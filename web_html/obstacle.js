class Wall {

  constructor(x, y) {
    
    this.x = x
    this.y = y
    this.blockSize = blockSize;
    this.pos = createVector(x, y);
    
  }

  draw() {
    
    switch (theme) {
        
      case "yellow":
        fill(100);
        break;
        
      case "pink":
        fill(129,29,111);
        break;
        
    }
    this.pos.x = this.x - scroll;
    rect(this.pos.x, this.pos.y, this.blockSize, this.blockSize);
    
  }

}

class FinishLine {
  
  constructor(x, y) {
    this.x = x
    this.y = y
    this.blockSize = blockSize;
    this.pos = createVector(x, y);
  }

  draw() {
    this.pos.x = this.x - scroll;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if ((i+j)%2 == 0) {
          fill(0);
        } else {
          fill(255);
        }
        rect(this.pos.x+i*this.blockSize/6, this.pos.y+j*this.blockSize/6, this.blockSize/6, this.blockSize/6);
      }
    }
  }
  
}

class Spike {
  
  constructor(x, y) {
    this.x = x
    this.y = y
    this.blockSize = blockSize;
    this.pos = createVector(x, y);
  }

  draw() {
    fill(129, 29, 111);
    this.pos.x = this.x - scroll;
    triangle(this.pos.x, this.pos.y, this.pos.x + this.blockSize/4, this.pos.y + this.blockSize, this.pos.x + this.blockSize/2, this.pos.y);
    triangle(this.pos.x + this.blockSize/2, this.pos.y, this.pos.x + this.blockSize*3/4, this.pos.y + this.blockSize, this.pos.x + this.blockSize, this.pos.y);
  }
  
}
