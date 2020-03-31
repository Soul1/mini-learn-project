import React from 'react';
import './App.scss';
import Monday from "./Component/Days/TheMonday/Monday";
import NavBar from "./Component/NavBar/NavBar";
import {Route} from "react-router-dom";
import Thursday from "./Component/Days/Thursday/Thursday";
import Friday from "./Component/Days/Friday/Friday";
import Wednesday from "./Component/Days/Wednesday/Wednesday";
import Tuesday from "./Component/Days/Tuesday/Tuesday";

const App = () => {
  return (
    <div className="app">
      <div className='app__nav'>
        <NavBar/>
      </div>
      <div className="app__main">
      <div className='app__main-window'>
        <Route path='/monday' render={() => <Monday/>}/>
        <Route path='/tuesday' render={() => <Tuesday/>}/>
        <Route path='/wednesday' render={() => <Wednesday/>}/>
        <Route path='/thursday' render={() => <Thursday/>}/>
        <Route path='/friday' render={() => <Friday/>}/>
      </div>
    </div>
    </div>
  );
};

export default App;
