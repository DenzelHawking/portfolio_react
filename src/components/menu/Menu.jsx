import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

const menuTitleList = [
  {
    name: 'main',
    href: '/'
  },
  {
    name: 'about us',
    href: '/about'
  },
  {
    name: 'our skills',
    href: '/skills'
  },
  {
    name: 'our projects',
    href: '/projects'
  },
  {
    name: 'contact us',
    href: '/contact'
  }
];

function Menu(props) {
  return (
    <div className="menu">
      <div className="current-tab-title">menu</div>
      <CircleMenu setSide={props.setSide} />
    </div>
  )
}

function CircleMenu(props) {
  let [menuClass, setMenuClass] = useState('circle-menu')

  function toggleMenu() {
    if (menuClass === 'circle-menu') {
      setMenuClass('circle-menu active');
    } else {
      setMenuClass('circle-menu');
    }
  }

  return (
    <div className={menuClass} onClick={toggleMenu}>
      <MenuItem setSide={props.setSide} />
    </div>
  )
}

function MenuItem(props) {
  return (
    menuTitleList.map((elem, index) => {
      return<NavLink to={elem.href} replace className={'menu-link menu-link-' + index} key={'menu-item-' + index}><div className={"circle-menu__item circle-menu__item-" + index} onClick={() => props.setSide(elem.href)}><div className="menu__title">{elem.name}</div></div></NavLink> 
    })
  )
}


export default Menu;