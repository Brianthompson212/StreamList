import React, { useState, useEffect } from 'react';
import './MovieSearch.css';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await response.json();
      setMovies(data);
      localStorage.setItem('lastSearch', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const savedMovies = localStorage.getItem('lastSearch');
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  }, []);

  return (
    <div className="movie-search-container">
      <h2>Search for Movies or Shows</h2>
      <input
        type="text"
        placeholder="Enter movie or show name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="movie-results">
        {movies.map((item, index) => (
          <div key={index} className="movie-card">
            <h3>{item.show.name}</h3>
            {item.show.image && <img src={item.show.image.medium} alt={item.show.name} />}
            <p>{item.show.summary ? item.show.summary.replace(/<[^>]+>/g, '') : 'No description available.'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
