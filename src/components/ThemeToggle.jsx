import React from 'react';
const ThemeToggle = ({ toggleTheme, isDarkTheme }) => {
  return (
    <button onClick={toggleTheme}>
      Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
    </button>
  );
};

export default ThemeToggle;

