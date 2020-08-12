import store from './State';
import { Direction } from './Direction';

class Snake {
  constructor(grid, y=5, x=5) {
    this.grid = grid;
    this.cells = new Array();
    this.addCell(y, x);
    this.direction = new Direction();
    this.growingBy = 0;
  }
  
  addCell(y, x) {
    let cell = this.grid.cells[y][x];
    this.cells.unshift(cell);
    cell.addSnake(this);
  }
  
  addHeadCell() {
    let currentHead = this.cells[0];
    
    let newY = (currentHead.y + this.direction.y + 10) % 10;
    let newX = (currentHead.x + this.direction.x + 10) % 10;
    
    this.addCell(newY, newX);
  }
  
  removeTailCell() {
    if (this.cells.length > 0) {
      let cell = this.cells.pop();
      cell.makeEmpty();
    }
  }
  
  grow() {
    this.growingBy += 1;
  }
  
  move() {
    if (this.cells.length > 0) {
      this.addHeadCell();
    
      if (this.growingBy > 0) {
        this.growingBy -= 1;
      } else {
        this.removeTailCell();
      }
    }
  }
  
  rotate(rotation) {
    console.log(rotation)
    this.direction.rotate(rotation);
  }
  
  die() {
    for (let cell of this.cells) {
      cell.makeEmpty();
    }
    this.cells = [];
  }
}

export default Snake;