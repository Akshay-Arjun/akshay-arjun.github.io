import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Community from './components/Community';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Projects from './components/Projects';
import Navbar from "./components/Navbar/Navbar";
import Playlist from './components/Playlist';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { IconButton } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  light: {
    color: '#000000',
  },
  dark: {
    color: '#FFFFFF',
  },
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function App() {
  const classes = useStyles();
  const [theme, setTheme] = useState(darkTheme);
 

  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
   
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/doconst classes = useStyles();nate" element={<Donate/>} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path='/playlist' element={<Playlist/>}/>
        </Routes>
        <IconButton onClick={toggleTheme} style={{position: 'absolute', right: '10px', top: '10px'}} aria-label="Toggle theme">
      <Brightness4Icon className={classes[theme.palette.mode]} />
    </IconButton>
      </Router>
    </ThemeProvider>
  );
}
