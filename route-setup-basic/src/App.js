import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Layout from './pages/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
