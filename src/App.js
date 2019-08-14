import React from 'react';
import { ThemeStore } from './ThemeContext';
import Content from './Content';

const App = () => {
  return (
    <ThemeStore>
      <Content />
    </ThemeStore>
  );
}

export default App;
