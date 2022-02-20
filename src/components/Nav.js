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
    Avatar,
    MenuItem,
    Tooltip,
    Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
     const [anchorElNav, setAnchorElNav] = React.useState(null);
     const [anchorElUser, setAnchorElUser] = React.useState(null);

     const handleOpenNavMenu = (event) => {
       setAnchorElNav(event.currentTarget);
     };
     const handleOpenUserMenu = (event) => {
       setAnchorElUser(event.currentTarget);
     };

     const handleCloseNavMenu = () => {
       setAnchorElNav(null);
     };

     const handleCloseUserMenu = () => {
       setAnchorElUser(null);
     };
    
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