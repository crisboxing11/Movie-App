import React from 'react'
import {
  Container,
  Card,
  CssBaseline,
  Typography,
  Box,
  Button,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Link,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const Home = () => {

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const theme = createTheme();


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default Home