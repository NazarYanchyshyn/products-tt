import React from 'react';

// eslint-disable-next-line react/prop-types
export const Comments = ({ comments, setProducts }) => {
  function deleteComments(commentId, productId) {
    const products = JSON.parse(localStorage.getItem('products'));
    // eslint-disable-next-line max-len,react/prop-types
    const productIndex = products.findIndex(item => item.id === productId);

    // eslint-disable-next-line max-len
    products[productIndex].comments = products[productIndex].comments.filter(item => item.id !== commentId);

    localStorage.setItem('products', JSON.stringify(products));
    setProducts(products);
  }

  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      {comments.map(item => (
        <>
          <p>{item.description}</p>
          {' '}
          <p>{item.date}</p>
          <button
            type="button"
            onClick={() => deleteComments(item.id, item.productId)}
          >
            DEL
          </button>
        </>
      ))}
    </div>
  );
};
