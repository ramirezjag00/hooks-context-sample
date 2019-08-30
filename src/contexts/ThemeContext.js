import React, { useState } from 'react';

const Context = React.createContext(true);

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const changeTheme = () => setTheme(!theme);
  return (
    <Context.Provider value={{ theme, changeTheme }}>
      {children}
    </Context.Provider>
  );
}

export { ThemeStore, Context as default };