import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';

const App = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Slider {...settings}>
            <div>
                <h1>Hello World</h1>
            </div>
            <div>
                <h1>It's me</h1>
            </div>
            <div>
                <h1>Martins</h1>
            </div>
        </Slider>

    );
}

export default App;