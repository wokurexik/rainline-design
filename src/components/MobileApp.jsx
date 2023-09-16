import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


function MobileApp() {
  return (
    <div className='App'>
        <div className="carousel-sec">
                    <div className="line"></div>
            <Carousel fade className='carousel-mobile'>
                <Carousel.Item interval={3000}>
                    <img
                    className="carousel d-block w-100"
                    src="./images/mobile-1.png"
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="carousel d-block w-100"
                    src="./images/mobile-2.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="carousel d-block w-100"
                    src="./images/mobile-3.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="carousel-text">
                <h1 >Download our <span>mobile</span> or <span>web</span>  application</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                 Officia voluptatem dolores sint asperiores? Magni quisquam quibusdam 
                  voluptatum enim, provident quidem quos  corrupti tempore sequi iusto, incidunt cum quia, cupiditate magnam?</p>
                  <div className="download">
                    <Link className='download-button' >Download</Link>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default MobileApp