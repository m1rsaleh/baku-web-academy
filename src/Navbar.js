import React from 'react';
import "./nav.css"
const Navbar = (props) => {
    return (
          <>
        <div className="nav container" >
        <div className="bwa">
                    <a href="https://www.instagram.com/b_w_academy/" className="bwa-a" >{props.baku}</a> 
        </div>
        <div className="join-us">
                    <a href="https://www.instagram.com/b_w_academy/" className="join-a">{props.join}</a>
        </div>

        
        </div>
        </>
    )
}

export default Navbar
