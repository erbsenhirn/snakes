import { Direction } from './Direction'


class Snake {
  constructor(y=5, x=5) {
    this.parts = [new SnakePart(y, x), new SnakePart(y-1, x), new SnakePart(y-1, x-1), new SnakePart(y-3, x-3)];
    this.direction = new Direction();
  }
  
  move() {
    let oldHead = this.parts[0];
    
    let newY = (oldHead.y + this.direction.y + 10) % 10
    let newX = (oldHead.x + this.direction.x + 10) % 10
    let newHead = new SnakePart(newY, newX)
    
    this.parts.unshift(newHead);
    this.parts.pop();
  }
}

class SnakePart {
  constructor(y, x) {
    this.y = y;
    this.x = x;
  }
}

export default Snake;