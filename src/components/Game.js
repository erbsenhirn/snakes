import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { REFRESH_GRID } from '../constants/action-types'
 

import Field from './Field';

const mapStateToProps = state => {
  return { grid: state.grid };
};

const ConnectedGame = ({ grid, dispatch }) => {
  useEffect(() => {
    setInterval(function(){ 
      dispatch({ type: REFRESH_GRID });
    }, 100);
  }, []);
  
  return (
  <div class="fields">
    { grid.cells.map(row => (
      row.map(cell => (
        <Field y={ cell.y } x={ cell.x } />
      ))
    ))}
  </div>
  )
}

const Game = connect(mapStateToProps)(ConnectedGame);
export default Game;