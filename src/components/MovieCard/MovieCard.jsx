import { Link } from 'react-router-dom';
import s from './MovieCard.module.scss';

const MovieCard = ({ movies }) => {
  const { id, title, poster_path } = movies;

  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li key={movie.id} className={s.item}>
          <Link to={`/movies/${id}`} className={s.item}>
            <img
              className={s.image}
              src={`https://api.themoviedb.org/3`}
              alt={poster_path}
              width="300"
              height="450"
            />
            <p className={s.title}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieCard;
