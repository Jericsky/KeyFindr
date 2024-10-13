import React, { useState } from 'react';
import './SearchBar.scss';

const types = ['buy', 'rent'];

export default function SearchBar() {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (newType) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      type: newType,
    }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button 
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>

      <form>
        <input type="text" name="location" placeholder="City Location" />

        <input 
          type="number" 
          name="minPrice" 
          placeholder="Min Price" 
          min={0}
          max={1000000000}
        />

        <input 
          type="number" 
          name="maxPrice" 
          placeholder="Max Price"
          min={0}
          max={1000000000}
        />

        <button type="submit">
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}
