import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);
    const url = (resource) => `https://jsonplaceholder.typicode.com/${resource}`;
    useEffect(
      () => {
        (async resource => {
          const response = await axios.get(url(resource));
          setResources(response.data);
        })(resource)
      }, [resource]);
  
    return resources;
  }

export default useResources;