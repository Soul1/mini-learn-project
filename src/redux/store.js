import {combineReducers, createStore} from "redux";
import namesMyFriends from "./reducers/namesMyFriends";
import mySkills from "./reducers/mySkills";


const reducers = combineReducers({
  namesFriends: namesMyFriends,
  mySkills: mySkills,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducers, composeEnhancers());


export default store