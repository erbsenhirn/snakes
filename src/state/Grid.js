import Cell from './Cell'

class Grid {
  constructor(width=10, height=10) {
    this.width = width
    this.height = height

    this.cells = new Array(width);
    for (var i = 0; i < width; i++) {
      this.cells[i] = new Array(height);
    }
    
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            this.cells[y][x] = new Cell(y, x);
        } 
    } 
  }
}

export default Grid;