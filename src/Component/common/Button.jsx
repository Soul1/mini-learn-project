import React from 'react';

const Button = ({namesFriends, setNewName, setNamesFriends}) => {

  const enterNewName = () => {
    setNamesFriends('');
    setNewName(namesFriends)
  };

  return <button onClick={enterNewName}/>;
};

export default Button;