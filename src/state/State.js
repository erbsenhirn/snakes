import { createStore } from "redux";
import Grid from './Grid';
import Snake from './Snake';
import { REFRESH_GRID } from '../constants/action-types';

const initialState = {
  snakes: new Array(new Snake()),
  grid: new Grid(),
};


export function updateGrid() {
  return { type: REFRESH_GRID };
}


function rootReducer(state = initialState, action) {
  
  switch (action.type) {
    case REFRESH_GRID:
      
      let snakes = new Array();
      for (let snake of state.snakes) {
        snake.move();
        snakes.push(snake)
      }

      let grid = Object.assign({}, state.grid);
      
      for(let y = 0; y < state.grid.height; y++ ) {
        for(let x = 0; x < state.grid.width; x++ ) {
          grid.cells[y][x].color = "white";
        }
      }
      
      for(let snake of state.snakes) {
        for(let part of snake.parts) {
          grid.cells[part.y][part.x].color = "red";
        }
      }
      
      return { ...state, snakes: snakes, grid: grid };
    default:
      return state;
  }
}



const store = createStore(rootReducer);
export default store;