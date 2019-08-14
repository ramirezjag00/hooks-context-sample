import React, { useContext } from 'react';
import useResources from '../utils/useResources';
import ThemeContext from '../contexts/ThemeContext';

const ResourceList = ({ resource, textStyle }) => {
  const resources = useResources(resource);
  const { theme } = useContext(ThemeContext);

  return (
    <ul className="ui list">
      {resources.map(({ id, title }) => (
        <li key={id} style={!theme ? textStyle : {}}>{title}</li>
      ))}
    </ul>
  );
}

export default ResourceList;