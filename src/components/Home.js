import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../data/me.jpg";
import Skills from './Skills'

class Home extends Component {
  render() {
    return (
 
      <><div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactRoundedImage
          image={MyPhoto}
          roundedColor="#321124"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
          hoverColor="#DD1144" />


      </div>
    
 <Skills/>
      </>
         
      );
  }
}

export default Home;