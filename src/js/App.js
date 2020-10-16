import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const App = () => {
    return (
        <Carousel >
            <div>
                <h1>Hello World</h1>
            </div>
            <div>
                <h1>It's me</h1>
            </div>
            <div>
                <h1>Martins</h1>
            </div>
        </Carousel>

    );
}

export default App;