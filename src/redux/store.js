import {combineReducers, createStore} from "redux";
import namesMyFriends from "./reducers/namesMyFriends";
import MySkills from "./reducers/mySkills";
import MyName from "./reducers/myName";


const reducers = combineReducers({
  namesFriends: namesMyFriends,
  mySkills: MySkills,
  myName: MyName,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducers, composeEnhancers());

export default store