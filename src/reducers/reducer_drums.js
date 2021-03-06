const DISPLAY = 'Display';

export default function(state = {display:'FCC Drum Machine'}, action) {
 switch(action.type){
   case DISPLAY:
     return Object.assign({}, state, {display: action.payload});
   default:
     return state;
 }
}
