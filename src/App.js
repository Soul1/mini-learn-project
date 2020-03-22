import React from 'react';
import namesMyFriends from './Containers/myFriends/namesMyFriends';
import './App.css';
import MyName from "./Component/MyName/MyName";
import MySkills from "./Containers/MySkills/MySkills";

const App = () => {
  return (
    <div className="app">
      <MyName/>
      <MySkills/>
      <namesMyFriends/>
    </div>
  );
};

export default App;
