import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import sunIcon from '../../assets/icons/sun.png';
import moonIcon from '../../assets/icons/moon.png';
import './ToggleTheme.css';

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='toggle'>
      {theme === 'light' ? (
        <>
          <img src={moonIcon} alt='Moon icon' />
          <div className='circle'></div>
        </>
      ) : (
        <>
          <div className='circle'></div>
          <img src={sunIcon} alt='Sun icon' />
        </>
      )}
    </button>
  );
};
