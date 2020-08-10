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
  constructor(y, x) {
    this.y = y;
    this.x = x;
  }
}

export default Snake;