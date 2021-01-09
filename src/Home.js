import React, {Component} from "react";
import Helper from "./Helpers";
import Navbar from "./Navbar";
import img from "./img/Video conferencing.svg";

class Home extends Component {
    render(){
        return(
           <>
           <Navbar
          
          join="Join us"
          baku="Baku Web Academy"
          
          />
           <Helper
           imgSrc={img}
           btn="Contact with Us"
          />;
          
           </>
        )
    }
}
export default Home;