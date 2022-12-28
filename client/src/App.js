import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'
import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Vote from './views/Vote'
import ContestCreate from './views/CreateContest';
function App() {
  return (
    <div className="App">

      <div style={{width:"700px",height:"250px" ,display:'flex'}}>
      <h1>Countries Competition </h1>
      </div>
      <Routes>
      <Route path="/" element={ <Main />} />
      <Route path="/contest/new" element={ <ContestCreate />} />

      <Route path="/choose/:id" element={ <Vote />} />
      <Route  path="/contest/:id" element={<Detail/>} /> 

    </Routes>

    </div>
  );
}

export default App;
