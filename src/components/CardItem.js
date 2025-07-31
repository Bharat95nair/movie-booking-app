import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
  let imageSrc;
  try {
    imageSrc = require(`../assets/images/movies/${item.image}`);
  } catch {
    // imageSrc = require(`../assets/images/movies/default.jpg`); // fallback image
  }

  return (
    <div className="col-md-3 mb-3">
      <div className="card h-100">
        <img
          src={imageSrc}
          className="card-img-top"
          alt={item.title}
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <Link to={`/movie/${item.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
