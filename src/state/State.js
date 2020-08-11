import { createStore } from "redux";
import Grid from './Grid';
import Snake from './Snake';
import { REFRESH_GRID, CELL_CLICKED } from '../constants/action-types';

const initialState = {
  grid: new Grid(),
  snakes: new Array(),
};

/*
export function refreshGrid() {
  return { type: REFRESH_GRID };
}*/

const addSnake = (state) => {
  let snakes = [new Snake(state.grid)];
  return snakes;
};

const moveSnakes = (snakes) => {
  let newSnakes = new Array();
  
  for (let snake of snakes) {
    snake.move();
    newSnakes.push(snake);
  }
  
  return newSnakes;
};


function rootReducer(state = initialState, action) {
  
  switch (action.type) {
    case REFRESH_GRID:
      
      let snakes = state.snakes;
      if (state.snakes.length == 0)  {
        snakes = addSnake(state);
      }

      snakes = moveSnakes(snakes);

      let grid = Object.assign({}, state.grid);
      
      for(let y = 0; y < state.grid.height; y++ ) {
        for(let x = 0; x < state.grid.width; x++ ) {
          if (grid.cells[y][x].content) {
            grid.cells[y][x].color = "red";
          } else {
            grid.cells[y][x].color = "white";
          } 
        }
      }
      
      return { ...state, snakes: snakes, grid: grid };

    case CELL_CLICKED:
      return state;
    
    default:
      return state;
  }
}


const store = createStore(rootReducer);
export default store;