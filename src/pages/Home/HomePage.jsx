import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'services/API';
import { MoviesList } from 'components/MoviesList/MoviesList';
import s from './HomePage.module.scss';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(request => setMovies(request.results));
  }, []);

  return (
    <div>
      <h1 className={s.title}> Trending today </h1>
      <MoviesList movies={movies} />
    </div>
  );
}

export default HomePage;
