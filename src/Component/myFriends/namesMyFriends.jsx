import React from 'react';
import EnterNewFriendName from "./enterNewFriendName";
import NameMyFriend from "./nameMyFriend";
import './myFriends.scss'

const NamesMyFriends = ({arrNamesFriends, setNewName}) => {

  const names = arrNamesFriends.map(name => <NameMyFriend name={name}/>);
  return (
    <div className='friends-inner'>
      <div className='enter'><EnterNewFriendName setNewName={setNewName}/></div>
      <div className='name'>{names}</div>
    </div>
  );
};

export default NamesMyFriends;