import React from 'react';
import NavList from './NavList';

export function CategoriesNav() {
  return (
    <nav className="categories-nav">
      <ul className="categories-nav__list">
        <li>
          <a href="/#">watches</a>
        </li>
        <li>
          <a href="/#">caps & hats</a>
        </li>
        <li>
          <a href="/#">accessories</a>
        </li>
        <li>
          <a href="/#">t-shirts</a>
        </li>
        <li>
          <a href="/#">bags</a>
        </li>
        <li>
          <a href="/#">shoes</a>
        </li>
      </ul>
      <NavList className="nav__list nav_bottom" />
    </nav>
  );
}
