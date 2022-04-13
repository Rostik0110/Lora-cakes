import React from "react";
import "./HomeHeader.css"
import LogoHeader from "./Logo.png";

const HomeHeader = () =>{
    return(
        <div className="HomeHeaderContainer">
          <img className="LogoHeader" src={LogoHeader} alt=""/>        
        </div>
    )
}

export default HomeHeader;