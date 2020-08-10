import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { REFRESH_GRID } from '../constants/action-types'
 

import Cell from './Cell';

const mapStateToProps = state => {
  return { grid: state.grid };
};

const ConnectedGrid = ({ grid, dispatch }) => {
  useEffect(() => {
    setInterval(function(){ 
      dispatch({ type: REFRESH_GRID });
    }, 500);
  }, []);
  
  return (
  <div class="grid">
    { grid.cells.map(row => (
      row.map(cell => (
        <Cell y={ cell.y } x={ cell.x } />
      ))
    ))}
  </div>
  )
}

const Grid = connect(mapStateToProps)(ConnectedGrid);
export default Grid;