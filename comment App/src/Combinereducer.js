import { combineReducers } from "redux";
import  reducer  from "./reducers.js";

const reducers = combineReducers({
  comment:reducer
});

export default reducers;
