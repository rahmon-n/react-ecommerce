import React, {useState} from 'react'
import {Link} from "react-router-dom";

export default function NavList({className}) {
  const [links] = useState([
      {to: '/', label: 'Home'},
      {to: '/products', label: 'Products'},
      {to: '/cart', label: 'Cart'},
      {to: '/', label: 'contacts'},
      {to: '/', label: 'about us'},
      {to: '/', label: 'sign in'},
    ]
  )


  return (
    <ul className={className}>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}