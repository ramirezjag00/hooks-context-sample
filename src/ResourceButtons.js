import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ResourceButtons = ({ setResource }) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const themeName = theme ? 'Light' : 'Dark';
  return (
    <>
      <button
        className={`ui button ${!theme && 'secondary'}`}
        onClick={() => setResource('posts')}
      >
        POSTs
      </button>
      <button
        className={`ui button ${!theme && 'secondary'}`}
        onClick={() => setResource('todos')}
      >
        TODOs
      </button>
      <button
        className={`ui button right floated ${!theme && 'secondary'}`}
        onClick={() => changeTheme()}
      >
        {themeName} Theme
      </button>
    </>
  );
}

export default ResourceButtons;