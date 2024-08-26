import React from 'react';
const ThemeToggle = ({ toggleTheme, isDarkTheme }) => {
  return (
    <button onClick={toggleTheme}style={{ backgroundColor: 'red', color: 'white' }}>
      Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
    </button>
  );
};

export default ThemeToggle;

