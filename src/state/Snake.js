import store from './State';
import { Direction } from './Direction';

class Snake {
  constructor(grid, y=5, x=5) {
    this.grid = grid;
    this.cells = new Array();
    this.addCell(y, x);
    this.direction = new Direction();
  }
  
  addCell(y, x) {
    let cell = this.grid.cells[y][x];
    this.cells.unshift(cell);
    cell.content = this;
  }
  
  addHeadCell() {
    let currentHead = this.cells[0];
    
    let newY = (currentHead.y + this.direction.y + 10) % 10;
    let newX = (currentHead.x + this.direction.x + 10) % 10;
    
    this.addCell(newY, newX);
  }
  
  removeTailCell() {
    let cell = this.cells.pop();
    cell.content = null;
  }
  
  move() {
    this.addHeadCell();
    this.removeTailCell();
  }
}

export default Snake;