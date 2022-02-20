import React from 'react'
import {
  Container,
  Card,
  CssBaseline,
  Typography,
  Box,
  Button,
  Grid,
  AppBar,
    Toolbar,    
    IconButton,
    MenuIcon
} from "@mui/material";

const Nav = () => {
  return (
  <Box>
<AppBar position="static">
<Toolbar>
    <IconButton 
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
    sx={{mr:2}}
    >

    </IconButton>
</Toolbar>
</AppBar>
  </Box>
  )
}

export default Nav