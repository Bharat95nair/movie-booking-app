import React from 'react';

const Filter = ({ categories, selected, onChange }) => (
  <select className="form-select mb-3" value={selected} onChange={e => onChange(e.target.value)}>
    <option value="">All Categories</option>
    {categories.map((cat, idx) => (
      <option key={idx} value={cat}>{cat}</option>
    ))}
  </select>
);

export default Filter;
