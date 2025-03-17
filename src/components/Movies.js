import React from 'react';

function Movies() {
  const movies = [
    { id: 1, title: "Inception", image: "https://via.placeholder.com/150" },
    { id: 2, title: "The Matrix", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Interstellar", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Movies</h2>
      <div className="flex gap-4">
        {movies.map(movie => (
          <div key={movie.id} className="text-center">
            <img src={movie.image} alt={movie.title} className="rounded mb-2"/>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
