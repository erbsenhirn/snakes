import React from 'react';
import { connect } from "react-redux";
import { cellClicked } from '../state/State'


const mapStateToProps = state => {
  return { grid: state.grid };
};

const ConnectedCell = ({ y, x, grid, dispatch }) => {
  let handeClick = () => {
    dispatch( cellClicked(y, x) );
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