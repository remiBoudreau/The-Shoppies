import { HAS_VISITED } from "../actions/visitActions";

const initState = false;

const visitReducer = (state = initState, action) => {
  if (action.type === HAS_VISITED) {
    return true;
  } else {
    return state;
  }
};

export default visitReducer;
