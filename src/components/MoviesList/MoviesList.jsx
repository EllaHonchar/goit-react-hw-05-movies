import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from '../MoviesList/MoviesList.module.scss';

export function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <div>
      <ul className={s.list}>
        {movies.map(movie => (
          <li key={movie.id} className={s.item}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={s.title}
            >
              <p className={s.title}>{movie.title || movie.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
