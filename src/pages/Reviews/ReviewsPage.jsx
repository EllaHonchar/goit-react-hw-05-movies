import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchDetailsReviews } from 'services/API';
import s from '../Reviews/ReviewsPage.module.scss';

function ReviewsPage() {
  const [dataMovie, setDataMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const response = fetchDetailsReviews(movieId);
    response
      .then(data => {
        setDataMovie(data.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div className={s.container}>
      {dataMovie !== null &&
        dataMovie.map(({ author_details: { name, username }, content, id }) => (
          <div key={id} className={s.reviews}>
            <h3 className={s.title}>Author: {name + ' ' + username}</h3>
            <p className={s.desk}>{content}</p>
          </div>
        ))}
    </div>
  );
}

export default ReviewsPage;
