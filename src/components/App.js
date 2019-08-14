import React from 'react';
import { ThemeStore } from '../contexts/ThemeContext';
import Content from './Content';

const App = () => {
  return (
    <ThemeStore>
      <Content />
    </ThemeStore>
  );
}

export default App;
