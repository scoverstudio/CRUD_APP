import { createStore, combineReducers } from "redux";
import categoriesReducer from "./categoriesRedux";
import initialState from "./initialState";
import postsRedux from "./postsRedux";

const subreducers = {
  posts: postsRedux,
  categories: categoriesReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
