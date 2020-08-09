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
            this.cells[x][y] = new Cell(x, y);
        } 
    } 
  }
}

class Cell {
  constructor(x, y, color = 'white') {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

export default Grid;