import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles';

const ItemGrid = ({ items }) => {
  return (
    <ItemsGrid>
      {items.map((item) => (
        <ItemStyles>
          <img src={`${item.image.asset.url}`} alt={item.pizzachefname} />
          <p>{item.pizzachefname}</p>
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
};

export default ItemGrid;
