import React from "react";
import Search from './Search'
import Logo from './Logo'
function MenuLinks() {
  return (
    <div className="side-menu">
      <Logo />
      <ul>
        <li className="active">
          <span role="img" aria-label="home">
            🏚
          </span>
          Home
        </li>
        <li>
          <span role="img" aria-label="heart">
            ♥️
          </span>
          Favorites
        </li>
        <li>
          <span role="img" aria-label="plus">
            ➕
          </span>
          New Album
        </li>
      </ul>
      <Search />
    </div>
  );
}

export default MenuLinks;
