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
    createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";



const Nav = () => {
    const theme = createTheme({
        palette: {
            primary: {
                type: "dark",
                main: "#170441"
            },
            secondary: {
              main: "#c10d4a"  

            }

        }
    })
    
  return (
    <Box className="bar" >
      <AppBar className="nav" position="static" sx={{ width: 3/4, bgcolor:"#170441"}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Guinea
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav