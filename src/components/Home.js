import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../data/me.jpg";
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '250px'
    }
});
class Home extends Component {
  render() {
    return (
 
<div class="imageContainer">
           <ReactRoundedImage
           image={MyPhoto}
           roundedColor="#321124"
           imageWidth="150"
           imageHeight="150"
           roundedSize="13"
           hoverColor="#DD1144"
            />
     </div>
     
      );
  }
}
 

export default withStyles(styles)(Home);