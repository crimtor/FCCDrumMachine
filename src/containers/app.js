//imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { Component } from "react";
import { updateDisplay } from "../actions/index";
import { bindActionCreators } from "redux";
import DrumBank from "../components/drumbank";
import DrumPad from "../containers/drumpad";

const DISPLAY = 'Display';

class App extends Component{
  constructor(props){
    super(props);
}
  render() {
    return (
      <div id="app">
        <div id="controls-container">

          <div id="header">

          </div>
          <div className="control"
            id="display"
            >{this.props.display}</div>
        </div>
        <DrumBank />
      </div>
    );
  }
}

//React-Redux
const mapStateToProps = (state) => {
  return {
    display: state.display,
    bank: state.bank
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateDisplay: updateDisplay }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
