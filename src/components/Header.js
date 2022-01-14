import React, {useEffect, useState} from 'react'
import Nav from "./Nav/Nav";
import ToggleCart from "./ToggleCart";
import {useLocation} from "react-router-dom";

export default function Header() {
  const [menuState, setMenu] = useState({isOpen: false})
  const location = useLocation()


  const menuToggleHandler = () => {
    setMenu({
      isOpen: !menuState.isOpen
    })
  }

  const closeMenuHandler = () => {
    setMenu({
      isOpen: false
    })
  }

  useEffect(()=>{
    setMenu({
      isOpen: false
    })
  },[location])

  return (
      <header className="header">
        <div className="logo">
          <a href="/">
            <img src="/images/logo.png" alt="logo"/>
          </a>
        </div>

        <Nav isOpen={menuState.isOpen} onClose={closeMenuHandler}/>

        <div className="header__wrapper">
          <button className="menu" onClick={menuToggleHandler}>
            <img src="/images/menu.png" alt="menu"/>
          </button>

          <ToggleCart/>
        </div>
      </header>
  )
}