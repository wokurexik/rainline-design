import React from 'react'
import { BackButton } from '../components/BackButton'
import '../styles/DashBoard.css'
import Footer from '../components/Footer'

function Dashboard() {
  return (
    <div className='dashboard'>
        <BackButton/>

    <div className="dash-text">
        <h1>Dashboard</h1>
        <h2 class="loading">Coming soon...</h2>
    </div>

    <Footer/>

    </div>
  )
}

export default Dashboard