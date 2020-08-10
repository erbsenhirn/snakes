import { Direction } from './Direction'

class Snake {
  constructor(y=5, x=5) {
    this.parts = [new SnakePart(y, x), new SnakePart(y+1, x)];
    this.direction = new Direction();
  }
  
  move() {
    for (let part of this.parts) {
      part.y = (part.y + this.direction.y + 10) % 10
      part.x = (part.x + this.direction.x + 10) % 10
    }
  }
}

class SnakePart {
  constructor(y, x) {
    this.y = y;
    this.x = x;
  }
}

export default Snake;