import React from 'react';

const SearchBar = ({ query, onChange }) => (
  <input
    type="text"
    className="form-control mb-3"
    placeholder="Search movies..."
    value={query}
    onChange={e => onChange(e.target.value)}
  />
);

export default SearchBar;
