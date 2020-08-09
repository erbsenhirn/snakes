import React from 'react';
import { connect } from "react-redux";

import Field from './Field';

const mapStateToProps = state => {
  return { grid: state.grid };
};

const ConnectedGame = ({ grid }) => (
  <div class="fields">
    { grid.cells.map(row => (
      row.map(cell => (
        <Field color={ cell.color } />
      ))
    ))}
  </div>
);

const Game = connect(mapStateToProps)(ConnectedGame);
export default Game;