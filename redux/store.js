import { createStore, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import storage from "./storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
  key: "primary",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function initializeStore() {
  return createStore(persistedReducer, applyMiddleware(thunk));
}
