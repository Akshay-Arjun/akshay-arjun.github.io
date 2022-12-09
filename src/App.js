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
  const [theme, setTheme] = useState(darkTheme);
  const [color, setColor] = useState('inherit');

  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
    setColor(color === 'inherit' ? 'secondary' : 'inherit');
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
          <Route path="/donate" element={<Donate/>} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path='/playlist' element={<Playlist/>}/>
        </Routes>
        <IconButton onClick={toggleTheme} style={{position: 'absolute', right: '10px', top: '10px'}} aria-label="Toggle theme">
          <Brightness4Icon color="secondary" />
        </IconButton>
      </Router>
    </ThemeProvider>
  );
}
