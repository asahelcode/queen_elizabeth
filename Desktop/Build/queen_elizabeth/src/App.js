import React from 'react';
import { Box, Typography } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Biography from './pages/Biography';
import Timeline from './pages/Timeline';
import Tribute from './pages/Tribute';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/biography' element={<Biography />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/timeline' element={<Timeline />} />
        <Route path='/Tribute' element={<Tribute />} />
      </Routes>
    </>
  );
};

export default App;
