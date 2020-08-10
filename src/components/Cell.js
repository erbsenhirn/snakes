import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { grid: state.grid };
};

function ConnectedCell(props) {
  return (
    <div class="cell" style={{backgroundColor: props.grid.cells[props.y][props.x].color}}>

    </div>
  );
}


const Cell = connect(mapStateToProps)(ConnectedCell);
export default Cell;