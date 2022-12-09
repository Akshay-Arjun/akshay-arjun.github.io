import React from 'react';
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
import DarkTheme, { createTheme } from 'react-dark-theme'

const lightTheme = {
  background: 'white',
  text: 'black',
  
}

const darkTheme = {
  background: "	#181818",
  text: 'white',

}
const myTheme = createTheme(darkTheme, lightTheme)
export default function App() {

  return (
<div> <DarkTheme light={lightTheme} dark={darkTheme} /> 

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
   
    </Router>
    </div>
  );
 
}
