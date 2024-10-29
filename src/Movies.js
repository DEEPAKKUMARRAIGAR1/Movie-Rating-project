import React from 'react';
import { useGlobalContext } from "./context";
import { NavLink } from 'react-router-dom';
import Rating from './components/Rating';

const Movies = () => {
  const { movies, isLoading, isError } = useGlobalContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError.show) {
    return <div>{isError.msg}</div>;
  }

  return (
    <section className="movie-page">
      <div className=" container grid grid-4-col">
        {movies.map((curMovie) => {
          const { id, title, poster_path } = curMovie;

          return (
            <NavLink key={id} to='/'   >
              <div className="card">
                <div className="card-info">
                  <h2>{title}</h2>
                  <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='Poster' />
                  <Rating/>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
