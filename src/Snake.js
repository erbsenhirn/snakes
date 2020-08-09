var directions = ["North", "East", "South", "West"]

class Snake {
  constructor(x=5, y=5) {
    this.parts = [new SnakePart(x, y)];
    this.direction = "South";
  }
  /*
  changeDirection(direction) {
    if (to = "left") {
      switch (this.direction) {
        "north": this.direction = west
      }
    } else {
      
    }
  }
  */
}

class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export default Snake;