import React, {useState} from 'react';

const MyName = () => {

  const [name] = useState('Midaev Akhmad')

  return (
    <div>
      {name}
    </div>
  );
}

export default MyName;