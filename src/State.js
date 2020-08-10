import { createStore } from "redux";
import Grid from './Grid';
import Snake from './Snake';
import { REFRESH_GRID } from './constants/action-types';

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
      let grid = Object.assign({}, state.grid);
      
      for(let snake of state.snakes) {
        for(let part of snake.parts) {
          grid.cells[part.x][part.y].color = "red";
        }
      }
      
      return { ...state, grid: grid };
    default:
      return state;
  }
}



const store = createStore(rootReducer);
export default store;