import { combineReducers } from "redux";
import Reducer from "./index";
import { reducer as FormReducer } from "redux-form";

const rootReducer = combineReducers({
  test: Reducer,
  form: FormReducer,
  
});

export default rootReducer;
