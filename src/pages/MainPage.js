import React from "react"
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import {Outlet, useLocation} from 'react-router-dom'

export default function MainPage() {
  const location = useLocation()

  const cls = ['intro']
  if (location.pathname === '/') {
    cls.push('intro_main')
  }

  return (
    <>
      <Intro className={cls.join(' ')}/>

      <Outlet/>

      <Footer/>
    </>
  )
}