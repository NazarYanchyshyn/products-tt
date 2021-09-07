import React from 'react';

// eslint-disable-next-line react/prop-types,max-len
export const ProductCard = ({ id, img, name, size, count, weight, history }) => {
  function details() {
    // eslint-disable-next-line react/prop-types
    history.push(`/details/${id}`);
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={img} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{count}</p>
            <p className="subtitle is-6">{weight}</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="subtitle is-6">{`${size.width}, ${size.height}`}</p>
          </div>
        </div>
        <button
          className="button is-primary"
          type="button"
          onClick={details}
        >
          Details
        </button>
      </div>
    </div>
  );
};
