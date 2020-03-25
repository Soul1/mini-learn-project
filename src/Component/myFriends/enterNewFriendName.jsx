import React, {useState} from 'react';
import Input from "../common/Input";
import Button from "../common/Button";

const EnterNewFriendName = ({setNewName}) => {

  const [namesFriends, setNamesFriends] = useState('');

  const onNewNameChange = (e) => {
    const newValue = e.target.value;
    setNamesFriends(newValue);
  };

  return (
    <div className='enter-friend'>
      <Input onNewNameChange={onNewNameChange} namesFriends={namesFriends}/>
      <Button setNewName={setNewName} namesFriends={namesFriends} setNamesFriends={setNamesFriends}/>
    </div>
  );
};

export default EnterNewFriendName;