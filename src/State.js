import { createStore } from "redux";
import Grid from './Grid'
import Snake from './Snake'

const initialState = {
  snakes: new Array(new Snake()),
  grid: new Grid()
};

export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload }
};


function rootReducer(state = initialState, action) {
  return state;
};



const store = createStore(rootReducer);
export default store;