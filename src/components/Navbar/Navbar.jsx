import React from 'react';
import './Navbar.css';
import { NavbarList } from '../NavbarList/NavbarList';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavbarList />
    </nav>
  );
};
