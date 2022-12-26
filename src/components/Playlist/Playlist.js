import React from 'react';
import Spotify from 'react-spotify-embed';


const Playlist = (props) => {
return (
  <>
  <Spotify style={{  
     width: "100%",
    minHeight:"100vh",
    paddingTop:"30px"
}}
 link="https://open.spotify.com/playlist/0AZGbXgMBJ2fEdufCP1PVv?si=d2iyVdj-RcCv52HqOieI5g"  frameBorder={10}  />

  </>
  )
};

export default Playlist;
