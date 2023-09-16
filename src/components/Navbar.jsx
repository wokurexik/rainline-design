import React from 'react'
import {Link} from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useState} from "react";
import '../mobile-styles/navbar.css'


export function Navbar() {

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
      if(!isMenuClicked) {
          setBurgerClass("burger-bar clicked")
          setMenuClass("menu visible")
      }
      else {
          setBurgerClass("burger-bar unclicked")
          setMenuClass("menu hidden")
      }
      setIsMenuClicked(!isMenuClicked)
  }
  
  return (
    <div className='App'>
        <nav>
              <h2>RAIN<span>LINE</span></h2>
              <div className="nav-links">
                  <Link>CFD</Link>
                  <Link>Invest</Link>
                  <DropdownButton id="dropdown-basic-button" title="Crypto">
                  <Dropdown.Item href="#">Stocks</Dropdown.Item>
                  <Dropdown.Item href="#">Forex</Dropdown.Item>
                  <Dropdown.Item href="#">Commodities</Dropdown.Item>
                </DropdownButton>



              </div>

                <div className='burger'>
                      <div className="burger-menu" onClick={updateMenu}>
                          <div className={burger_class} ></div>
                          <div className={burger_class} ></div>
                          <div className={burger_class} ></div>
                      </div>
                  </div>
              <span className="sign-login"><Link to={"/login"}>Login /</Link></span>
              <Link className='contact-link' to={"/sign-up"}>
                  Sign Up
                  <span></span><span></span><span></span><span></span>
              </Link>
              </nav>
              <div className="nav-menu">
                    <div className={menu_class}>
                          <Link>CFD</Link>
                        <Link>Invest</Link>
                        {/* <DropdownButton id="dropdown-basic-button" title="Crypto">
                        <Dropdown.Item href="#">Stocks</Dropdown.Item>
                        <Dropdown.Item href="#">Forex</Dropdown.Item>
                        <Dropdown.Item href="#">Commodities</Dropdown.Item>
                      </DropdownButton> */}
                    </div>
              </div>
    </div>
  )
}

export default Navbar