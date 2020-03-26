import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to='/monday'>Monday</NavLink></li>
        <li><NavLink to='/tuesday'>Tuesday</NavLink></li>
        <li><NavLink to='/wednesday'>Wednesday</NavLink></li>
        <li><NavLink to='/thursday'>Thursday</NavLink></li>
        <li><NavLink to='/friday'>Friday</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;