import { createStore } from "redux";
import { combineReducers, applyMiddleware, compose } from "redux";
import courseReducer from "./reducers/courseReducer";
import thunk from "redux-thunk";
import authReducer from "../redux/reducers/auth";
const reducer = combineReducers({
  //sate
  course: courseReducer,
  auth: authReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
