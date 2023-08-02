import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { todosReducer } from "./reducers/todosReducer";
import { tabsReducer } from "./reducers/tabsReducer";

const reducer = combineReducers({
  todos: todosReducer,
  currentTab: tabsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
