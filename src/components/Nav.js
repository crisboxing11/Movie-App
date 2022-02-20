import React from 'react'
import '../Style/Nav.css'
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  return (
  <Box>
<AppBar className="bar" position="static" sx={{ width: 3/4, mx: 1/2}}>
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
    <Button color="inherit">Login</Button>
</Toolbar>
</AppBar>
  </Box>
  )
}

export default Nav