import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { currentSnakeAction: state.currentSnakeAction };
};

const ConnectedSnakeAction = ({ currentSnakeAction }) => {
  return (
    <p class="action">
        { currentSnakeAction }
    </p>
  );
}


const SnakeAction = connect(mapStateToProps)(ConnectedSnakeAction);
export default SnakeAction;