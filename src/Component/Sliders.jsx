import React from 'react'
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import Banner from '../images/banner.jpg'

function Sliders() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Container>
            <div className='banner_area'>
                <Slider {...settings}>
                    <div>
                        <img src={Banner} className="img-fluid" alt="" />
                    </div>
                    <div>
                        <img src={Banner} className="img-fluid" alt="" />
                    </div>
                    <div>
                        <img src={Banner} className="img-fluid" alt="" />
                    </div>
                    <div>
                        <img src={Banner} className="img-fluid" alt="" />
                    </div>
                    <div>
                        <img src={Banner} className="img-fluid" alt="" />
                    </div>
                    <div>
                        <img src={Banner} className="img-fluid" alt="" />
                    </div>
                </Slider>
            </div>
        </Container>
    )
}

export default Sliders