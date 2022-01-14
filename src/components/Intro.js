import React from 'react'
import Header from "./Header";

export default function Intro(props) {
  return (
    <div className={props.className || 'intro'}>
      <div className="container">
        <Header/>

        {props.className === 'intro intro_main'
          ? <h1 className="intro__title">FLAWLESS TIME.</h1>
          : null
        }
      </div>
    </div>
  )
}