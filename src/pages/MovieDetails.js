import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from '../mock/movies.json';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id.toString() === id);

  if (!movie) {
    return <div className="container mt-4">Movie not found.</div>;
  }

  let imageSrc;
  try {
    imageSrc = require(`../assets/images/movies/${movie.image}`);
  } catch {
    // imageSrc = require(`../assets/images/movies/default.jpg`); // fallback image
  }

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <img
        src={imageSrc}
        alt={movie.title}
        className="img-fluid mb-3"
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`} className="btn btn-warning">
        Book Show
      </Link>
    </div>
  );
};

export default MovieDetails;
