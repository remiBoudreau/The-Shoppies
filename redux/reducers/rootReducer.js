import nominationsReducer from "./nominationsReducers";
import visitReducer from "./visitReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  nominations: nominationsReducer,
  visit: visitReducer,
});

export default rootReducer;
