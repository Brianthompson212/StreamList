import React from "react";
import inceptionImg from '../images/inception.jpg';
import matrixImg from '../images/matrix.jpg';
import interstellarImg from '../images/interstellar.jpg';

const movies = [
  { id: 1, title: "Inception", image: inceptionImg },
  { id: 2, title: "The Matrix", image: matrixImg },
  { id: 3, title: "Interstellar", image: interstellarImg },
];

function Movies() {
  return (
    <div className="movies-container">
      <h2>Movies List</h2>
      <div className="movies-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
S