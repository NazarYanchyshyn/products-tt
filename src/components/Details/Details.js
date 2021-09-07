import React from 'react';
import { Comments } from '../Comments/Comments';

// eslint-disable-next-line react/prop-types
export const Details = ({ history, products, setProducts }) => {
  // eslint-disable-next-line react/prop-types
  const id = +history.location.pathname.split('/').pop();

  // eslint-disable-next-line react/prop-types
  const product = products.find(item => item.id === id);

  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.name}</p>
      <p>{`Кількість: ${product.count}`}</p>
      <p>{`Вага: ${product.weight}`}</p>
      <Comments
        setProducts={setProducts}
        comments={product.comments}
      />
    </div>
  );
};
