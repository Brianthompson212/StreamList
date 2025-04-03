import React from "react";
import "./Movies.css"; // Import your CSS file here

function Movies() {
  const movies = [
    { id: 1, title: "Inception", image: `${process.env.PUBLIC_URL}/images/inception.jpg` },
    { id: 2, title: "The Matrix", image: `${process.env.PUBLIC_URL}/images/matrix.jpg` },
    { id: 3, title: "Interstellar", image: `${process.env.PUBLIC_URL}/images/interstellar.jpg` },
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
