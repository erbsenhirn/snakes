import { createStore } from "redux";
import Grid from './Grid';
import Snake from './Snake';
import { ROTATIONS, SNAKE_ACTIONS, CELL_CONTENT_TYPES } from '../constants/constants';
import { REFRESH_GRID, CELL_CLICKED } from '../constants/action-types';

const initialState = {
  grid: new Grid(),
  snakes: new Array(),
  currentSnakeAction: SNAKE_ACTIONS.GROW,
};


export function refreshGrid() {
  return { type: REFRESH_GRID };
}
export function cellClicked(y, x) {
  return { type: CELL_CLICKED, y, x };
}

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

const getRandomSnakeAction = () => {
  var keys = Object.keys(SNAKE_ACTIONS);
  return SNAKE_ACTIONS[keys[Math.floor(keys.length * Math.random())]];
};

const spawnPickup = (state) => {
  state.grid.cells[Math.floor(10 * Math.random())][Math.floor(10 * Math.random())].addPickup();
}

function rootReducer(state = initialState, action) {
  
  switch (action.type) {
    case REFRESH_GRID:
      
      let snakes = state.snakes;
      if (state.snakes.length == 0)  {
        snakes = addSnake(state);
      }

      snakes = moveSnakes(snakes);
      spawnPickup(state);

      
      let grid = Object.assign({}, state.grid);

      return { ...state, snakes: snakes, grid: grid };

    case CELL_CLICKED:
      let clickedCell = state.grid.cells[action.y][action.x];

      if (clickedCell.contentType == CELL_CONTENT_TYPES.SNAKE) {
        let clickedSnake = clickedCell.content;
        switch (state.currentSnakeAction) {
          case SNAKE_ACTIONS.GROW:
            clickedSnake.grow();
            break;
          case SNAKE_ACTIONS.ROTATE_LEFT:
            clickedSnake.rotate(ROTATIONS.LEFT);
            break;
          case SNAKE_ACTIONS.ROTATE_RIGHT:
            clickedSnake.rotate(ROTATIONS.RIGHT);
            break;
        }
        let currentSnakeAction = getRandomSnakeAction();
        return { ...state, currentSnakeAction: currentSnakeAction };
      } else {
        return state;
      }
      
    
    default:
      return state;
  }
}


const store = createStore(rootReducer);
export default store;