import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../../data/me.jpg";
import Skills from '../Skills'
import About from './About'

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
          roundedColor="#009DFF"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
          hoverColor="#33FF00" />


      </div>
    <About/>
    <Skills/>
      </>
         
      );
  }
}

export default Home;