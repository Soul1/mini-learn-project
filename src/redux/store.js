import {combineReducers, createStore} from "redux";
import namesMyFriends from "./reducers/namesMyFriends";
import MySkills from "./reducers/mySkills";
import MyName from "./reducers/myName";
import TodoLists from "./reducers/todoLists";

const reducers = combineReducers({
  namesFriends: namesMyFriends,
  mySkills: MySkills,
  myName: MyName,
  todoLists: TodoLists,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducers, composeEnhancers());

export default store