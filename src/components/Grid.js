import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { refreshGrid } from '../state/State'
import Cell from './Cell';

const mapStateToProps = state => {
  return { grid: state.grid };
};

const ConnectedGrid = ({ grid, dispatch }) => {
  useEffect(() => {
    setInterval(function(){ 
      dispatch( refreshGrid() );
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