import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchDetailsCast } from 'services/API';
import s from '../Cast/CastPage.module.scss';

const BASE_URL = 'https://image.tmdb.org/t/p/w200';

function CastPage() {
  const [dataMovies, setDataMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const response = fetchDetailsCast(movieId);
    response
      .then(data => {
        setDataMovies(data.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div className={s.block}>
      <ul className={s.list}>
        {dataMovies !== null &&
          dataMovies.map(({ profile_path, name, character, id }) => (
            <li key={id} className={s.item}>
              <img
                src={profile_path ? BASE_URL + profile_path : ''}
                alt={name}
                className={s.profile}
              />
              <div className={s.desk}>
                <p className={s.desk}>{name}</p>
                <p className={s.desk}>Character: {character}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default CastPage;
