import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import UserList from './pages/UserList';
import Counter from './pages/Counter';


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/userlist" element={<UserList />} />
        <Route exact path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;