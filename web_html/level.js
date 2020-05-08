class Level {
  
  constructor(num) {
    
    this.player = new Player(100, 200);
    this.stage = "playing";

    this.levelNum = num;
    switch (this.levelNum) {
        
      case 1:
        this.map = [["floor", 0, 180, 20],  // Start
                    ["spike", 300, 200, 1],  // Spike in the middle
                    ["finishLine", 400, 180, 3],  // Finish
                    ];
        break;
        
      case 2:
        this.map = [["floor", 0, 180, 9],  // Start
                   ["floor", 220, 240, 7],  // Second floor
                   ["floor", 430, 200, 10],  // Floor after wall
                   ["floor", 720, 200, 9],  // Tunnel bottom
                   ["floor", 700, 250, 10],  // Tunnel top
                   ["pillar", 900, 250, 7],  // Above tunnel
                   ["floor", 1000, 180, 8],  // After tunnel
                   ["floor", 1200, 260, 3],  // Little floor up
                   ["finishLine", 1350, 100, 3],  // Finish
                   ];
        break;
        
    }
    
    this.obstacles = [];
    this.buildMap();
    
  }
  
  draw() {
    
    this.player.draw();
    for (let i = 0 ; i < this.obstacles.length; i++) {
      this.obstacles[i].draw();
    }

  }

  buildMap() {
    
    for (let i = 0; i < this.map.length; i++) {
      
      switch (this.map[i][0]) {
        case "floor":

          for (let j = 0; j < this.map[i][3]; j++) {
            this.obstacles.push(new Wall(j*blockSize + this.map[i][1], this.map[i][2]));
          }
          break;

        case "pillar":

          for (let j = 0; j < this.map[i][3]; j++) {
            this.obstacles.push(new Wall(this.map[i][1], j*blockSize + this.map[i][2]));
          }
          break;

        case "finishLine":

          for (let j = 0; j < this.map[i][3]; j++) {
            this.obstacles.push(new FinishLine(this.map[i][1] + j*blockSize, this.map[i][2]));
          }
          break;

        case "spike":

          for (let j = 0; j < this.map[i][3]; j++) {
            this.obstacles.push(new Spike(this.map[i][1] + j*blockSize, this.map[i][2]));
          }
          break;
          
      }
    }
    
  }
  
}

