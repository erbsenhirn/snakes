class Cell {
  constructor(y, x, color = 'white', content = 'empty') {
    this.y = y;
    this.x = x;
    this.color = color;
    this.content = content;
  }
}

export default Cell;