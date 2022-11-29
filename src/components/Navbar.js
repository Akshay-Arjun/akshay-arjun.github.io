import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import Paper from '@mui/material/Paper';
export default function Navbar() {

  const [value, setValue] = React.useState(0);
 
  return (
  
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="About" href="/home" icon={<AccountCircleOutlinedIcon />} />
          <BottomNavigationAction label="Projects" href="/projects" icon={<WorkOutlineIcon />} />
          <BottomNavigationAction label="Contact" href="/contact" icon={<ContactMailOutlinedIcon />} />
          <BottomNavigationAction label="Playlist" href="/playlist"icon={<LibraryMusicOutlinedIcon />} />
        </BottomNavigation>

   
        </Paper>

);
}