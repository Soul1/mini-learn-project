import React from 'react';

const Input = ({onNewNameChange, namesFriends}) => {


  return <input onChange={onNewNameChange} value={namesFriends} autoFocus={true}/>;
};

export default Input;