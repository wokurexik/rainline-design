import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className="f-links">
            <li>
                <Link>Lorem Ipsum</Link>
                <Link>Lorem Ipsum</Link>
               
            </li>
            <li>
                <Link>Lorem Ipsum</Link>
                <Link>Lorem Ipsum</Link>
                
            </li>
        </div>
        <div className="f-mid">
            <div className="f-logo">
                <h2>RAIN<span>LINE</span></h2>
            </div>
            <div className="f-icons">
                    
            </div>
        </div>
        <div className="f-text">
            <h2>Trade with us!</h2>
        </div>
    </div>
  )
}

export default Footer