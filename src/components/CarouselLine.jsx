import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function CarouselLine() {


  return (
    <div className='carousel'>
        <Carousel fade className='carousel-line'>
                <Carousel.Item interval={3000} >
                    <div className="c-item">
                        <h2>Over people love us</h2>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={30}>
                <div className="c-item">
                        <h2>Over 100000+ people love us</h2>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={30}>
                <div className="c-item">
                        <h2>Over 100000+ people love us</h2>
                    </div>
                </Carousel.Item>
            </Carousel>
    </div>
  )
}

export default CarouselLine