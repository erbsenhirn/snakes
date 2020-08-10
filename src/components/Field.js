import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { grid: state.grid };
};

function ConnectedField(props) {
  return (
    <div class="field" style={{backgroundColor: props.grid.cells[props.y][props.x].color}}>

    </div>
  );
}


const Field = connect(mapStateToProps)(ConnectedField);
export default Field;