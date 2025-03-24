import React, { useState, useEffect } from 'react';
import './MovieSearch.css';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  // Handle the search operation
  const handleSearch = async () => {
    if (!query.trim()) {
      setError('Please enter a movie or show name.');
      return;
    }

    try {
      console.log("Searching for:", query); // Debugging log

      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data); // Debugging log

      if (Array.isArray(data) && data.length > 0) {
        setMovies(data); // Update movies state
        localStorage.setItem('lastSearch', JSON.stringify(data)); // Store in localStorage
        setQuery(''); // Clear the input after searching
        setError(''); // Clear any previous errors
      } else {
        setMovies([]);
        setError('No results found. Try a different search.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMovies([]);
      setError('Failed to fetch data. Please try again later.');
    }
  };

  // Load from localStorage on component mount
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
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="movie-results">
        {movies.length > 0 ? (
          movies.map((item, index) => (
            <div key={index} className="movie-card">
              <h3>{item.show.name}</h3>
              {item.show.image && <img src={item.show.image.medium} alt={item.show.name} />}
              <p>{item.show.summary ? item.show.summary.replace(/<[^>]+>/g, '') : 'No description available.'}</p>
            </div>
          ))
        ) : (
          <p>No results found. Try a different search.</p>
        )}
      </div>
    </div>
  );
}

export default MovieSearch;
