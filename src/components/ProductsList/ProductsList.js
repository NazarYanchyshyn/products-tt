import React from 'react';
import { ProductCard } from '../ProductCart/ProductCard';

// eslint-disable-next-line react/prop-types
export const ProductsList = ({ products, history }) => (
  <div>
    {
      // eslint-disable-next-line react/prop-types
      products.map(item => (
        <ProductCard
          img={item.imageUrl}
          name={item.name}
          count={item.count}
          size={item.size}
          weight={item.weight}
          history={history}
          id={item.id}
        />
      ))
    }
  </div>

);
