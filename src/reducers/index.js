import { combineReducers } from "redux";
import DrumsReducer from "./reducer_drums";

const rootReducer = combineReducers({
  drums: DrumsReducer
});

export default rootReducer;
