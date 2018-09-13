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
import Header from "../components/header";
import Footer from "../components/footer";
import DrumPad from "../containers/drumpad";

const DISPLAY = 'Display';

class App extends Component{
  constructor(props){
    super(props);
    let myDisp = this.props.display
    if(!myDisp){
      myDisp = "FCC Drum Machine";
    }
}
  render() {
    return (
      <div id="app">
          <Header />
          <div className="control"
            id="display">{this.myDisp}</div>
        <DrumBank />
        <Footer />
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
