import React from 'react';
import MySkill from "./MySkill";

const MySkills = ({arrSkills}) => {

  const allMySkills = arrSkills.map(skill => <MySkill skill={skill}/>);

  return (
    <div>
      {allMySkills}
    </div>
  );
};

export default MySkills;