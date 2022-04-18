import React from "react";
import "./HomeSlider.css";
import Slider from 'react-slick';
import img1 from './img1.jpg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';

const HomeSlider = () =>{
    const settings={
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      };
    let rounds=[
        img1,
        img2,
        img3,
        img4,
        img5
    ]

    return(
            <div className="HomeSlider">
              <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
              <Slider {...settings}>
              {rounds.map(( item , index) => {
                        return(
                    <div>
                        <img key={index} className="round" src={item} />
                    </div>)
                    }       
            )}
              </Slider>
            </div>
          );
}

export default HomeSlider;