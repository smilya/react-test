import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import inputsReducer from "./inputsReducer";

const rootReducer = combineReducers({
  content: contentReducer,
  inputs: inputsReducer,
});

export default rootReducer;
