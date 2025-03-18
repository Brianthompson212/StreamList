import React from "react";
import "./Movies.css"; // <-- Import your CSS file here

function Movies() {
  const movies = [
    { id: 1, title: "Inception", image: "/images/inception.jpg" },
    { id: 2, title: "The Matrix", image: "/images/matrix.jpg" },
    { id: 3, title: "Interstellar", image: "/images/interstellar.jpg" },
  ];

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie">
          <img src={movie.image} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
