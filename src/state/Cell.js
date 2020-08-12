import Pickup from './Pickup'
import { CELL_CONTENT_TYPES } from '../constants/constants'

class Cell {
  constructor(y, x, color = 'white', content = null, contentType = CELL_CONTENT_TYPES.EMPTY) {
    this.y = y;
    this.x = x;
    this.color = color;
    this.content = content;
    this.contentType = contentType;
  }
  
  addPickup() {
    if (this.contentType == CELL_CONTENT_TYPES.EMPTY) {
      let pickup = new Pickup(this, this.y, this.x);
      this.content = pickup;
      this.contentType = CELL_CONTENT_TYPES.PICKUP;
      this.color = "green";
    }
  }
  
  addSnake(snake) {
    if (this.contentType == CELL_CONTENT_TYPES.SNAKE) {
      this.content.die();
      snake.die();
      return;
    }
    
    if (this.contentType == CELL_CONTENT_TYPES.PICKUP) {
      snake.grow();
    }
    
    this.content = snake;
    this.contentType = CELL_CONTENT_TYPES.SNAKE;
    this.color = "red"; 
  }
  
  
  makeEmpty() {
    this.content = null;
    this.contentType = CELL_CONTENT_TYPES.EMPTY;
    this.color = 'white';
  }
}

export default Cell;