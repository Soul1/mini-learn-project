import React from 'react';
import EnterNewFriendName from "./enterNewFriendName";
import nameMyFriend from "./nameMyFriend";

const namesMyFriends = ({arrNamesFriends}) => {

  const names = arrNamesFriends.map(name => <nameMyFriend name={name}/>);
  debugger
  return (
    <div>
      <div><EnterNewFriendName/></div>
      <div>{names}</div>
    </div>
  );
};

export default namesMyFriends;