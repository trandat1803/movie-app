import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api';
import apiService  from '../api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const res = await apiService.get(`genre/movie/list?api_key=148c8c91a329d210cfc8b8b2ed6c79d0&language=en-US`)
      // const moviesData = await fetchMovies();
      // setMovies(moviesData);
      console.log(res);
    };
    loadMovies();
  }, []);

  return (
    <div className="homepage">
      <h1>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
