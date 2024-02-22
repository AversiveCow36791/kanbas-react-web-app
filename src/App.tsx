// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import HelloWorld from "./Labs/a3/HelloWorld";
import Labs from "./Labs";
import Kanbas from './Kanbas';
import {HashRouter} from 'react-router-dom';
import {Routes, Route, Navigate} from 'react-router';

function App() {
  console.log("Hello!");
  return (
    <HashRouter>
      <div>
      <Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>        
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
