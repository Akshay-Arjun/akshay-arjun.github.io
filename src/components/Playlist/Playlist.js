import React from 'react';
import Spotify from 'react-spotify-embed';


const Playlist = (props) => {
return (
  <>
  <Spotify link="https://open.spotify.com/playlist/0AZGbXgMBJ2fEdufCP1PVv?si=d2iyVdj-RcCv52HqOieI5g" width={"100%"} height={"100vh"} frameBorder={10}  />

  </>
  )
};

export default Playlist;
