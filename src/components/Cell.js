import React from 'react';
import { connect } from "react-redux";
import { CELL_CLICKED } from '../constants/action-types'


const mapStateToProps = state => {
  return { grid: state.grid };
};

const ConnectedCell = ({ y, x, grid, dispatch }) => {
  let handeClick = () => {
    dispatch({ type: CELL_CLICKED });
  }
  
  return (
    <div 
      class="cell" 
      style={{backgroundColor: grid.cells[y][x].color}}
      onClick={ handeClick }
    >

    </div>
  );
}


const Cell = connect(mapStateToProps)(ConnectedCell);
export default Cell;