import React from 'react'
import NavList from "./NavList";

export default function Nav({isOpen, onClose}) {
  const cls = ['nav']

  if (isOpen) {
    cls.push('nav_active')
  }
  return (
    <nav className={cls.join(' ')}>
      <NavList className='nav__list nav__header'/>
      <div className="close-btn white">
        <img src="/images/close1.png" alt="close" onClick={onClose}/>
      </div>
    </nav>
  )
}