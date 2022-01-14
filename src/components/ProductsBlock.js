import React from 'react'
import {CategoriesNav} from "./Nav/CategoriesNav";

export default function ProductsBlock(props) {
  return (
    <div className={props.className || 'products'}>
      <div className="container">
        <CategoriesNav/>
        {props.children}
      </div>
    </div>
  )
}
