import React from "react";
import "./Navbar.css";

const Navbar = () =>{
    return(
        <div className="NavbarContent">
            <div className="NavigationButton">
            <div className="NavbarButton">
                <a className="NavbarLink"href="/Home">головна</a>
            </div>
            <div className="NavbarButton">
                <a className="NavbarLink" href="/Biography">про нас</a>
            </div>
            <div className="NavbarButton">
                <a className="NavbarLink" href="/Orders">замовлення</a>
            </div>
            <div className="NavbarButton">
                <a className="NavbarLink" href="/Gallery">галерея</a>
            </div>
            <div>
                <a className="NavbarLink" href="/Contacts">контакти</a>
            </div>
        </div>

        </div>
    )
}

export default Navbar;