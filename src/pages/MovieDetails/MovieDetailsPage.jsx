import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import GoBack from 'components/GoBack/GoBack';
import { fetchMovieDetails } from 'services/API';
import s from '../MovieDetails/MovieDetailsPage.module.scss';
import Loader from 'components/Loader/Loader';

function MovieDetailsPage() {
  const [dataMovie, setDataMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();

  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    setLoader(true);
    const response = fetchMovieDetails(movieId);
    response
      .then(data => {
        setDataMovie(data);
      })
      .catch(error => console.log(error));
    setLoader(false);
  }, [movieId]);

  const { poster_path, overview, original_title, vote_average, genres } =
    dataMovie;

  return (
    <>
      <GoBack />
      {loader && <Loader />}
      <div className={s.details}>
        <img
          src={poster_path ? BASE_URL + poster_path : ''}
          alt={original_title}
          className={s.poster}
        />
        <div className={s.movie}>
          <h2>{original_title}</h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={s.movieDetails}>
            {genres?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.block}>
        <p className={s.text}>Additional information</p>
        <ul className={s.list}>
          <li>
            <Link to="cast" state={location.state} className={s.item}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state} className={s.item}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
export default MovieDetailsPage;
