import React, { useState } from 'react'
import logo from '../../assets/cinema-logo.svg'
import './Header.scss'

const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Now playing',
    type: 'now-playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: 'Top rated',
    type: 'top-rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
]

const Header = () => {
  const [navClass, setNavClass] = useState(false)
  const [menuClass, setMenuClass] = useState(false)

  const toggleMenu = () => {
    setNavClass(!navClass)
    setMenuClass(!menuClass)
    //Note to self: I didn't add the if-else to prevent scrolling when navbar is hamburger'd
    // because I can't replicate the behavior and the code to fix it is ugly
  }

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} alt="logo"></img>
          </div>
          <div
            className={`${
              menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'
            }`}
            id="header-mobile-menu"
            onClick={() => toggleMenu()}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`${
              navClass ? 'header-nav header-mobile-nav' : 'header-nav'
            }`}
          >
            {HEADER_LIST.map((alink) => (
              <li className="header-nav-item" key={alink.id}>
                <span className="header-list-name">
                  <i className={alink.iconClass}></i>
                </span>
                <span className="header-list-name">{alink.name}</span>
              </li>
            ))}
            <input
              className="search-input"
              type="text"
              placeholder="Search for a movie"
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
