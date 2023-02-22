import { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import { fetchMovieSearch } from 'services/API';
// import MovieCard from 'components/MovieCard/MovieCard';
import GoBack from 'components/GoBack/GoBack';
import { MoviesList } from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMovieSearch(query).then(request => {
      if (!request.results) {
        return;
      }
      setMovies(request.results);
    });
  }, [query]);

  const onSubmit = request => {
    setQuery(request);
  };

  return (
    <>
      <GoBack />
      <SearchBar onSubmit={onSubmit} />
      {/* {movies && <MovieCard movies={movies} />} */}
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;

// import { Link } from 'react-router-dom';
// import { BsFillCaretLeftFill } from 'react-icons/bs';
// import s from '../Movies/MoviesPage.module.scss';

// export function MoviesPage() {
//   return (
//     <div className={s.box}>
//       <Link to="/" className={s.link}>
//         <BsFillCaretLeftFill /> Go back
//       </Link>
//       {/* <button type="button" className={s.btn}>
//         Go back
//       </button> */}
//       <h1>Movies</h1>
//     </div>
//   );
// }
