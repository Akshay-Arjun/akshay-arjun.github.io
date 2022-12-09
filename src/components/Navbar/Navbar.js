import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './styles.css';
export default function Navbar() {
  const ref = React.useRef(null);
  const pathname = window.location.pathname; 
  const [value, setValue] = React.useState(pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <div>
      {/* The navbar container */}
      <div className="fixed-navbar">
    <Container maxWidth="sm">
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
     <Paper sx={{ color:'black',position: 'fixed',bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation value={value} onChange={handleChange} showLabels={true}>
        <BottomNavigationAction label="About" value="/" icon={<AccountCircleOutlinedIcon />} component={Link} to='/' />
        <BottomNavigationAction label="Projects" value="/projects" icon={<WorkOutlineIcon />} component={Link} to='/projects' />
        <BottomNavigationAction label="Contact" value="/contact" icon={<ContactMailOutlinedIcon />} component={Link} to='/contact' />
        <BottomNavigationAction label="Playlist" value="/playlist" icon={<LibraryMusicOutlinedIcon />} component={Link} to='/playlist' />
      </BottomNavigation>


    </Paper>
</Box>
</Container>
</div>
</div>
);
}