import React from 'react';

export const NavbarItem = ({ label, href }) => {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
};
