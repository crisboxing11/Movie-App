import React from 'react'
import '../Style/Nav.css'
import { useState } from "react"
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
import logo from "../assets/My project.png"

const pages = ["Products", "Pricing", "About"];
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
     const [anchorElNav, setAnchorElNav] = useState(null);
     const [anchorElUser, setAnchorElUser] = useState(null);

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
    <div className="bar">
      <AppBar position="static" sx={{ width: 3 / 4, bgcolor: "#170441" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <span className="icon">
                <img className="logo" src={logo} alt="logo" />{" "}
              </span>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    className="avatar"
                    src="/broken-image.jpg"
                    sx={{ bgcolor: "#c10d4a", width: 56, height: 56 }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Nav