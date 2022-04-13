import React from "react";
import "./FooterContacts.css";
import Phone from "./Phone.png";
import Addres from "./Addres.png";
import Instagram from "./Instagram.png";
import FaceBook from "./FaceBook.png";

const FooterContacts = () => {
    return (
        <div className="FooterContactsContent">
            <div className="Contacts">
                <p className="ContactsTitle">наші контакти :</p>
                <div className="PhoneNumber">
                    <img src={Phone} />
                    <a className="Number" href="tel:+380966937517">+38 096 693 7517</a>
                </div>
                <div className="Addres">
                    <img src={Addres} />
                    <a className="MyAddres" href="https://goo.gl/maps/VLA5EHZaSVu6ff3ZA">Україна, Вінницька обл., Жмеринський р-н, с.Сьомаки</a>
                </div>
            </div>
            <div className="SocialNetworks">
                <p className="ContactsTitle">слідкуйте за нами тут :</p>
                <div className="SocialNetworkBox">
                    <a href="https://www.instagram.com/larisakustrich/"><img className="Instagram" src={Instagram} /></a>
                    <a href="https://www.facebook.com/profile.php?id=100034972283416"><img src={FaceBook} /></a>
                </div>
            </div>
        </div>
    )
}

export default FooterContacts;