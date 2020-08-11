class Cell {
  constructor(y, x, color = 'white', content = null) {
    this.y = y;
    this.x = x;
    this.color = color;
    this.content = content;
  }
}

export default Cell;