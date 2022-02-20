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
<MenuIcon />
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
        Guinea
    </Typography>
</Toolbar>
</AppBar>
  </Box>
  )
}

export default Nav