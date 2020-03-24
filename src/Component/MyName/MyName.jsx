import React, {useState} from 'react';
import './MyName.scss'

const MyName = () => {

  const [name] = useState('Midaev Akhmad');

  return (
    <div className='name'>
      {name}
    </div>
  );
};

export default MyName;