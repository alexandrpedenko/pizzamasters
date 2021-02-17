import React from 'react';
import { ItemsGrid, SingleGridItem, ItemStyles } from '../styles';

const LoadingGrid = ({ count }) => {
  return (
    <ItemsGrid>
      {Array.from({ length: count }, (_, i) => (
        <ItemStyles key={i}>
          <img
            src='data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII='
            className='loading'
            alt='Loading'
            width='500'
            height='400'
          />
          <p>Loading...</p>
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
};

export default LoadingGrid;
