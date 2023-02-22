import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import { fetchMovieSearch } from 'services/API';
import GoBack from 'components/GoBack/GoBack';
import { MoviesList } from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchMovieSearch(searchQuery).then(request => {
      if (!request.results) {
        return;
      }
      setMovies(request.results);
    });
  }, [searchQuery]);

  const onSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <GoBack />
      <SearchBar searchQuery={searchQuery} onSubmit={onSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
