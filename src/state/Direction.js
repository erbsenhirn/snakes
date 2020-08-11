import { ROTATIONS } from '../constants/constants'

export const DIRECTIONS = {
    NORTH: "NORTH",
    EAST: "EAST",
    SOUTH: "SOUTH",
    WEST: "WEST",
}

export class Direction {
  constructor(direction = DIRECTIONS.SOUTH) {
    this.currentDirection = direction;
    this.y = 0;
    this.x = 0;
    this.updateDirection(direction);
  }
  
  updateDirection(direction) {
    switch (direction) {
      case DIRECTIONS.NORTH:
        this.y = -1;
        this.x = 0;
        this.currentDirection = DIRECTIONS.NORTH;
        break;
      case DIRECTIONS.EAST:
        this.y = 0;
        this.x = +1;
        this.currentDirection = DIRECTIONS.EAST;
        break;
      case DIRECTIONS.SOUTH:
        this.y = +1;
        this.x = 0;
        this.currentDirection = DIRECTIONS.SOUTH;
        break;
      case DIRECTIONS.WEST:
        this.y = 0;
        this.x = -1;
        this.currentDirection = DIRECTIONS.WEST;
        break;
    }
  }
  
  rotate(rotation) {
    if (rotation == ROTATIONS.LEFT) {
      switch (this.currentDirection) {
        case DIRECTIONS.NORTH:
          this.updateDirection(DIRECTIONS.WEST);
          break;
        case DIRECTIONS.EAST:
          this.updateDirection(DIRECTIONS.NORTH);
          break;
        case DIRECTIONS.SOUTH:
          this.updateDirection(DIRECTIONS.EAST);
          break;
        case DIRECTIONS.WEST:
          this.updateDirection(DIRECTIONS.SOUTH);
          break;
      }
    }
    
    else if (rotation == ROTATIONS.RIGHT) {
      switch (this.currentDirection) {
        case DIRECTIONS.NORTH:
          this.updateDirection(DIRECTIONS.EAST);
          break;
      case DIRECTIONS.EAST:
        this.updateDirection(DIRECTIONS.SOUTH);
        break;
      case DIRECTIONS.SOUTH:
        this.updateDirection(DIRECTIONS.WEST);
        break;
      case DIRECTIONS.WEST:
        this.updateDirection(DIRECTIONS.NORTH);
        break;
      }
    }
  }
}