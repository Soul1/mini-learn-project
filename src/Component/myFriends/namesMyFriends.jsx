import React from 'react';
import EnterNewFriendName from "./enterNewFriendName";
import NameMyFriend from "./nameMyFriend";
import './myFriends.scss'

const NamesMyFriends = ({arrNamesFriends}) => {

  const names = arrNamesFriends.map(name => <NameMyFriend name={name}/>);
  return (
    <div className='friends-inner'>
      <div className='enter'><EnterNewFriendName/></div>
      <div className='name'>{names}</div>
    </div>
  );
};

export default NamesMyFriends;