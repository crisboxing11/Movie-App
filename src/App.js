import React from 'react'
import { Container,Card, CssBaseline, Typography,Box,Button,Grid} from '@mui/material'
import Landing from './pages/Landing'
import Login from './pages/Login'   // <-- import Login
import { Link, Route, Routes } from 'react-router-dom'  
import useMovie from './hooks/useMovie'

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App