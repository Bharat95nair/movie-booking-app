import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import CardItem from '../components/CardItem';
import movies from '../mock/movies.json';

const MovieList = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    let result = movies;
    if (query) result = result.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));
    if (filter) result = result.filter(m => m.category === filter);
    setFilteredMovies(result);
  }, [query, filter]);

  const categories = [...new Set(movies.map(m => m.category))];

  return (
    <div className="container mt-4">
      <SearchBar query={query} onChange={setQuery} />
      <Filter categories={categories} selected={filter} onChange={setFilter} />
      <div className="row">
        {filteredMovies.map(movie => <CardItem key={movie.id} item={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
