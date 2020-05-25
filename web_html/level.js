class Level {
  
  constructor(num) {
    
    this.player = new Player(100, 300);
    this.stage = "playing";
    scroll = createVector(0, 0);
    scrollVel = normScroll;
    this.pause = false;
    this.timer = 0;

    this.levelNum = num;
    switch (this.levelNum) {
        
      case 1:
        this.map = [["floor", 0, 9, 30],  // Start
                    ["trampoline", 20, 10, 1],
                    ["finishLine", 30, 9, 3],  // Finish
                    ];
        break;
        
      case 2:
        this.map = [["floor", 0, 9, 10],  // Start
                    ["pillar", 10, 9, 3],
                    ["pillar", 13, 14, 1],
                    ["pillar", 16, 17, 1],
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 3:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 4:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 5:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 6:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;

      case 7:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 8:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 9:
        this.map = [["floor", 0, 9, 9],  // Start
                    ["floor", 11, 12, 7],  // Second floor
                    ["floor", 21.5, 10, 10],  // Floor after wall
                    ["floor", 36, 10, 9],  // Tunnel bottom
                    ["floor", 35, 12.5, 10],  // Tunnel top
                    ["pillar", 45, 12.5, 7],  // Above tunnel
                    ["floor", 50, 9, 8],  // After tunnel
                    ["floor", 60, 12.5, 3],  // Little floor up
                    ["finishLine", 72, 3, 2],  // Finish
                    ];
        break;
        
      case 10:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 11:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 12:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;

      case 13:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 14:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
      
      case 15:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 16:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 17:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 18:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;

      case 19:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;
        
      case 20:
        this.map = [["floor", 0, 9, 100],  // Start
                    ["finishLine", 100, 5, 3],  // Finish
                    ];
        break;

    }
    
    this.obstacles = [];
    this.buildMap();
    
  }
  
  draw() {

    if (!this.pause) {
      this.timer += 1/60;
      this.player.update();
    }

    push();
    scale(1, -1);
    translate(0, -height);
    this.player.draw();
    for (let i = 0 ; i < this.obstacles.length; i++) {
      this.obstacles[i].draw();
    }
    pop();

  }

  pauseLvl() {

    this.pause = !this.pause;
    if (this.pause) {
      scrollStore = scrollSpeed;
      scrollSpeed = 0;
    } else {
      scrollSpeed = scrollStore;
    }

  }

  buildMap() {
    
    for (let i = 0; i < this.map.length; i++) {
      
      switch (this.map[i][0]) {
        case "floor":

          for (let j = 0; j < this.map[i][3]; j++) {
            this.obstacles.push( new Wall(blockSize*(j + this.map[i][1]), blockSize*this.map[i][2]) );
          }
          break;

        case "pillar":

          for (let j = 0; j < this.map[i][3]; j++) {
            this.obstacles.push( new Wall(blockSize*this.map[i][1], blockSize*(j+this.map[i][2])) );
          }
          break;

        case "finishLine":

          for (let j = 0; j < this.map[i][3]; j++) {
            this.obstacles.push( new FinishLine(blockSize*(this.map[i][1]+j), blockSize*this.map[i][2]) );
          }
          break;

        case "spike":

          for (let j = 0; j < this.map[i][3]; j++) {
            this.obstacles.push( new Spike(blockSize*(this.map[i][1]+j), blockSize*this.map[i][2]) );
          }
          break;

        case "trampoline":

          for (let j = 0; j < this.map[i][3]; j++) {
            this.obstacles.push( new Trampoline(blockSize*(this.map[i][1]+j), blockSize*this.map[i][2]) );
          }
          break;
          
      }
    }
    
  }
  
}