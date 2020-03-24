import React from 'react';
import MySkill from "./MySkill";
import './MySkills.scss'

const MySkills = ({arrSkills}) => {

  const allMySkills = arrSkills.map(skill => <MySkill skill={skill}/>);

  return (
    <div className='skills-inner'>
      {allMySkills}
    </div>
  );
};

export default MySkills;