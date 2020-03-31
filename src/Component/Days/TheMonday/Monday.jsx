import React from 'react';
import MyName from "../../MyName/MyName";
import MySkills from "../../../Containers/MySkills/MySkills";
import NamesMyFriends from "../../../Containers/myFriends/namesMyFriends";

const Monday = () => {
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

export default Monday;