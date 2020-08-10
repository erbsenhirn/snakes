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
        break;
      case DIRECTIONS.EAST:
        this.y = 0;
        this.x = +1;
        break;
      case DIRECTIONS.SOUTH:
        this.y = +1;
        this.x = 0;
        break;
      case DIRECTIONS.WEST:
        this.y = 0;
        this.x = -1;
        break;
    }
  }
}