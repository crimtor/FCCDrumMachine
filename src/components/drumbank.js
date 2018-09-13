//imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { Component } from "react";
import { updateDisplay} from "../actions/index";
import { bindActionCreators } from "redux";
import DrumPad from "../containers/drumpad";


const drumMap = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Break-Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
];


export default class DrumBank extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let drumBank = drumMap.map((drum) =>{
          return (
            <DrumPad
              url={drum.url}
              id={drum.id}
              keyTrigger={drum.keyTrigger}
              keyCode={drum.keyCode}
              />
          )
        });

    return(
      <div className="row" id="drumbank">
        {drumBank}
      </div>
    )
  }
}
