import React, { useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import ResourceButtons from './ResourceButtons';
import ResourceList from './ResourceList';

const Content = () => {
    const [resource, setResource] = useState('posts');
    const { theme } = useContext(ThemeContext);
    return (
      <div className='ui container' style={!theme ? styles.container : {}}>
        <h2 className={`ui header`}>React Hooks and Context</h2>
        <ResourceButtons setResource={setResource} />
        <ResourceList resource={resource} textStyle={styles.textStyle} />
      </div>
    );
  }

  const styles = {
    container: {
      backgroundColor: '#767676',
    },
    textStyle: {
      color: '#fff',
    }
  };  

export default Content;