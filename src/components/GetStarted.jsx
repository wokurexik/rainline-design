import React from 'react'
import { Link } from 'react-router-dom'

function GetStarted() {
  return (
    <div>
        <div className="App">
            <div className="get-started">
                <h2>Get started today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sint natus eos quis, accusantium architecto asperiores non minima labore repellendus nam nemo numquam aliquam totam quidem perferendis impedit ducimus? Delectus!</p>
                <Link to={"/sign-up"}>Get Started </Link>
            </div>
        </div>
    </div>
  )
}

export default GetStarted