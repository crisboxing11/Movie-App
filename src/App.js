import React from 'react'
import { Container,Card, CssBaseline, Typography,Box,Button,Grid} from '@mui/material'
import Landing from './pages/Landing'
import Login from './pages/Login'   // <-- import Login
import { Link, Route, Routes } from 'react-router-dom'  //<Route path="/" element={<Home />} /> (Example use after this line)
//  <Routes>
//    <Route path="/" element={<Home />} />
//    <Route path="about" element={<About />} />
//  </Routes>;

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App