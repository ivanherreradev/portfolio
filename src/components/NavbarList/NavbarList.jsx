import React from 'react';
import './NavbarList.css';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { NavbarSeparator } from '../NavbarSeparator/NavbarSeparator';
import { ToggleTheme } from '../ToggleTheme/ToggleTheme';

export const NavbarList = () => {
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mí', href: '#sobre-mi' },
  ];

  return (
    <ul className='navbar-list'>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <NavbarItem label={link.label} href={link.href} />
          <NavbarSeparator />
        </React.Fragment>
      ))}
      <li>
        <ToggleTheme />
      </li>
    </ul>
  );
};
