//imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { Component } from "react";
import { updateDisplay} from "../actions/index";
import { bindActionCreators } from "redux";
import DrumBank from "../components/drumbank";

const DISPLAY = 'Display';

//React
class DrumPad extends Component{
  constructor(props){
    super(props);
    this.playSound = this.playSound.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnMount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  playSound(event){
    let sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
  }
  updateDisplay(event){
      let display = document.getElementById('display');
      display.innerHTML=this.props.id;
  }
  handleKeyPress(event){
    if(event.keyCode === this.props.keyCode){
      this.playSound(event);
      this.updateDisplay(event);
    }
  }
  render(){
    return (
      <div
        className="drum-pad col-4"
          id={this.props.id}
          onClick={(event) => { this.playSound(event); this.updateDisplay(event);} }>
          <p>{this.props.keyTrigger}</p>
          <audio className="clip"
          id={this.props.keyTrigger}
          src={this.props.url}></audio>
      </div>
    )
  }
}

//React-Redux
const mapStateToProps = (state) => {
  return {
    display: state.display,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateDisplay: (newDisplay) => {
      dispatch(updateDisplay(newDisplay));
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);
