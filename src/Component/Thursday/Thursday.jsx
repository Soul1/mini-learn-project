import React from 'react';
import MyName from "../MyName/MyName";
import MySkills from "../../Containers/MySkills/MySkills";
import NamesMyFriends from "../../Containers/myFriends/namesMyFriends";

const Thursday = () => {
  return (
    <div>
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

export default Thursday;