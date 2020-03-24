import React from 'react';
import './App.scss';
import MyName from "./Component/MyName/MyName";
import MySkills from "./Containers/MySkills/MySkills";
import NamesMyFriends from "./Containers/myFriends/namesMyFriends";

const App = () => {
  return (
    <div className="app">
      <div className='app__info-me'>
        <MyName/>
        <MySkills/>
      </div>
      <div className='app__info-friends'>
      <NamesMyFriends/>
      </div>
    </div>
  );
};

export default App;
