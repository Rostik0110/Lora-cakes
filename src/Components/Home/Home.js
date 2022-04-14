import React from 'react';
import './Home.css';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeChooseUs from './HomeContent/HomeChooseUs/HomeChooseUs';
import HomeSlider from './HomeContent/HomeSlider/HomeSlider';
import HomeHugeChoice from './HomeContent/HomeHugeChoice/HomeHugeChoice';
import FooterContacts from '../FooterContacts/FooterContacts';
import Navbar from '../Navigation/Navbar';
// import Filter from '../test filter/Filter';


const Home = () => {
    return(       
        <div className='home'>
            <Navbar/>
            <HomeHeader/>
            <HomeChooseUs/>
            <HomeSlider/>
            <HomeHugeChoice/>
            <FooterContacts/>
            {/* <Filter/> */}
        </div>   
    )
}

export default Home;