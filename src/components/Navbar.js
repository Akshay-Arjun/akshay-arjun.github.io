import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const pathname = window.location.pathname; 
  const [value, setValue] = React.useState(pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
   
     <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation value={value} onChange={handleChange}  showLabels={true}>
        <BottomNavigationAction label="About" value="/" icon={<AccountCircleOutlinedIcon />} component={Link} to='/' />
        <BottomNavigationAction label="Projects" value="/projects" icon={<WorkOutlineIcon />} component={Link} to='/projects' />
        <BottomNavigationAction label="Contact" value="/contact" icon={<ContactMailOutlinedIcon />} component={Link} to='/contact' />
        <BottomNavigationAction label="Playlist" value="/playlist" icon={<LibraryMusicOutlinedIcon />} component={Link} to='/playlist' />
      </BottomNavigation>


    </Paper>

);
}