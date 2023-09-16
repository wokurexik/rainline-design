import React from 'react'
import MobileApp from '../components/MobileApp';
import Navbar from '../components/Navbar';
import GetStarted from '../components/GetStarted';
import CarouselLine from '../components/CarouselLine';
import Footer from '../components/Footer';
import CFDBadges from '../components/CFDBadges';

function Home() {
  return (
    <div>
        <Navbar/>
        <GetStarted/>
        <MobileApp/>
        <CFDBadges/>
        {/* <CarouselLine/> */}
        <Footer/>
    </div>
  )
}

export default Home