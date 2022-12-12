import React from 'react';
import Spotify from 'react-spotify-embed';


const Playlist = (props) => {
return (
  <>
  <h3 style={{alignContent:'space-evenly',paddingLeft:"20px",paddingRight: '50px'}}> Note : If the selected song doesn't play, click on pause button and then play button.</h3>
  <h3 style={{padding: '20px'}}> Note : Spotify playlists play only 30 seconds on mobile phone browser.</h3>
  <h3 style={{padding: '20px'}}>Mass Hits :</h3>
  <Spotify style={{padding: '20px'}} link="https://open.spotify.com/playlist/6CzljxkeQwpRyg08wRGMJb" width={"100%"} frameBorder={10}  />
  <h3 style={{padding: '20px'}}>Love Hits :</h3>
  <Spotify style={{padding: '20px'}} link="https://open.spotify.com/playlist/3p2tAkOvJqOPYjttRxEQD5" width={"100%"} frameBorder={10}  />
  </>
  )
};

export default Playlist;
